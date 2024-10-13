import '../styles/menu-gallery.css';
import { Button, Link, Thumbnail, useModalOverlay } from '@zigurous/react-components'; // prettier-ignore
import classNames from 'classnames';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { headerLinks } from '../links';

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

const MenuGallery = ({ open, onRequestClose = () => {} }) => {
  useModalOverlay(open, true);
  return (
    <div
      className={classNames('menu-gallery', {
        open: open,
        closed: !open,
      })}
    >
      <div
        aria-hidden={!open}
        className="menu-gallery__container container-fluid"
      >
        <ul className="menu-gallery__list">
          {open && (
            <StaticQuery
              query={query}
              render={(data) => {
                return headerLinks.map((link) => {
                  const gallery = data[link.key] || { nodes: [] };
                  return (
                    <li className="menu-gallery__section" key={link.to}>
                      <Link
                        activeClassName=""
                        aria-disabled={!open}
                        aria-label={link.name}
                        disabled={!open}
                        ElementType={link.ElementType || GatsbyLink}
                        external={link.external}
                        onClick={onRequestClose}
                        tabIndex={open ? 0 : -1}
                        to={link.to}
                        unstyled
                      >
                        <span>{link.name}</span>
                        <Button
                          className="margin-top-md margin-left-lg active"
                          icon="only"
                          iconName="east"
                          style={Button.style.text}
                        />
                      </Link>
                      <div className="menu-gallery__grid">
                        {gallery.nodes.map((item, index) => (
                          <Thumbnail
                            alt={item.imageAltText || ''}
                            animated={false}
                            aria-disabled={!open}
                            aria-label={item.title}
                            className="menu-gallery__thumbnail"
                            disabled={!open}
                            ElementType={GatsbyLink}
                            height={item.image.sharp.original.height}
                            image={item.image.sharp.original.src}
                            imageClassName="img-fluid"
                            index={index}
                            key={item.id}
                            onClick={onRequestClose}
                            shadow={false}
                            to={`/${item.category}/?index=${index}`}
                            width={item.image.sharp.original.width}
                          />
                        ))}
                      </div>
                    </li>
                  );
                });
              }}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

MenuGallery.propTypes = {
  open: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default MenuGallery;
