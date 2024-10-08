import '../styles/menu.css';
import { Link, useModalOverlay } from '@zigurous/react-components';
import classNames from 'classnames';
import { Link as GatsbyLink, graphql, navigate, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Header from './Header';
import { navLinks } from '../links';

const query = graphql`
  query Menu {
    games: allGamesJson {
      nodes {
        id: jsonId
        category
        title
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
    art: allArtJson {
      nodes {
        id: jsonId
        category
        title
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
    websites: allWebsitesJson {
      nodes {
        id: jsonId
        category
        title
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
    tech: allTechJson {
      nodes {
        id: jsonId
        category
        title
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
    presentations: allPresentationsJson {
      nodes {
        id: jsonId
        category
        title
        image {
          sharp: childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
        imageAltText
        imageBorder
      }
    }
  }
`;

const Menu = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(query);
  useModalOverlay(isOpen, true);
  return (
    <React.Fragment>
      <div
        className={classNames('menu', {
          open: isOpen,
          closed: !isOpen,
        })}
      >
        <div aria-hidden={!isOpen} className="menu__container container-fluid">
          <ul>
            {navLinks.map((link) => {
              const gallery = data[link.key] || { nodes: [] };
              return (
                <li key={link.to}>
                  <Link
                    activeClassName=""
                    aria-disabled={!isOpen}
                    aria-label={link.name}
                    disabled={!isOpen}
                    ElementType={link.ElementType || GatsbyLink}
                    external={link.external}
                    onClick={() => setIsOpen(false)}
                    tabIndex={isOpen ? 0 : -1}
                    to={link.to}
                    unstyled
                  >
                    {link.name}
                  </Link>
                  <div className="menu__gallery">
                    {gallery.nodes.map((node, index) => (
                      <button
                        aria-disabled={!isOpen}
                        aria-label={node.title}
                        className="menu__gallery-thumbnail"
                        disabled={!isOpen}
                        key={node.id}
                        onClick={() => {
                          navigate(`/${node.category}/?index=${index}`);
                          setIsOpen(false);
                        }}
                      >
                        <img
                          alt={node.imageAltText || ''}
                          className="img-fluid"
                          width={node.image.sharp.original.width}
                          height={node.image.sharp.original.height}
                          src={node.image.sharp.original.src}
                        />
                      </button>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Header
        location={location}
        isMenuOpen={isOpen}
        toggleMenu={() => setIsOpen(!isOpen)}
      />
    </React.Fragment>
  );
};

Menu.propTypes = {
  location: PropTypes.object,
};

export default Menu;
