import '../styles/menu-gallery.css';
import { Button, Link, Thumbnail, useModalOverlay } from '@zigurous/react-components'; // prettier-ignore
import classNames from 'classnames';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { headerLinks } from '../links';
import type { ProjectJson } from '../types';

export interface MenuData {
  games: ProjectJson;
  websites: ProjectJson;
  art: ProjectJson;
  tech: ProjectJson;
  presentations: ProjectJson;
}

export interface MenuGalleryProps {
  open: boolean;
  onRequestClose: () => void;
}

export default function MenuGallery({
  open = false,
  onRequestClose = () => {},
}: MenuGalleryProps) {
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
              render={(data: MenuData) =>
                headerLinks.map(link => {
                  const gallery: ProjectJson = data[
                    link.id as keyof typeof data
                  ] || { nodes: [] };
                  return (
                    <li className="menu-gallery__section" key={link.to}>
                      <Link
                        activeClassName=""
                        aria-disabled={!open}
                        aria-label={link.name}
                        as={GatsbyLink}
                        onClick={onRequestClose}
                        tabIndex={open ? 0 : -1}
                        to={link.to}
                        unstyled
                      >
                        <span>{link.name}</span>
                        <Button
                          className="margin-top-md margin-left-lg active"
                          icon="east"
                          iconAlignment="only"
                          style="text"
                        />
                      </Link>
                      <div className="menu-gallery__grid">
                        {gallery.nodes.map((item, index) => (
                          <Thumbnail
                            animated={false}
                            aria-disabled={!open}
                            aria-label={item.title}
                            as={GatsbyLink}
                            className="menu-gallery__thumbnail"
                            image={{
                              src: item.image.sharp.original.src,
                              alt: item.imageAltText || '',
                              width: item.image.sharp.original.width,
                              height: item.image.sharp.original.height,
                              className: 'img-fluid',
                            }}
                            index={index}
                            key={item.id}
                            onClick={onRequestClose}
                            shadow={false}
                            to={`/${item.category}/?index=${index}`}
                          />
                        ))}
                      </div>
                    </li>
                  );
                })
              }
            />
          )}
        </ul>
      </div>
    </div>
  );
}

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
