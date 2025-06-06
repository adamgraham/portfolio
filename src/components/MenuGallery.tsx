import '../styles/menu-gallery.css';
import { Button, Link, Overlay, Text, Thumbnail } from '@zigurous/forge-react'; // prettier-ignore
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
  return (
    <Overlay
      className="menu-gallery"
      closeOnScrimClick={false}
      open={open}
      onRequestClose={onRequestClose}
    >
      <div aria-hidden={!open} className="container-fluid">
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
                    <li className="menu-gallery__section" key={link.href}>
                      <Link
                        activeClassName=""
                        aria-disabled={!open}
                        aria-label={link.name}
                        as={GatsbyLink}
                        className="display font-700 inline-flex align-center"
                        onClick={onRequestClose}
                        style={{ marginBottom: '0.25em' }}
                        tabIndex={open ? 0 : -1}
                        to={link.href}
                        unstyled
                      >
                        <span>{link.name}</span>
                        <Button
                          className="ml-lg font-600 active"
                          icon="east"
                          iconAlignment="only"
                          size="sm"
                          variant="text"
                        />
                      </Link>
                      <div className="menu-gallery__grid">
                        {gallery.nodes.map((item, index) => (
                          <Thumbnail
                            animated
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
    </Overlay>
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
