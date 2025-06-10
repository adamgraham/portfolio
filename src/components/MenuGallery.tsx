import '../styles/menu-gallery.css';
import { Overlay, Text, useBreakpoint } from '@zigurous/forge-react';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import React from 'react';
import type { ProjectJson } from '../types';

export interface MenuData {
  games: ProjectJson;
  websites: ProjectJson;
  art: ProjectJson;
  tech: ProjectJson;
  presentations: ProjectJson;
  tutorials: ProjectJson;
}

export interface MenuGalleryProps {
  location: Location;
  open: boolean;
  onRequestClose: () => void;
}

export default function MenuGallery({
  location,
  open = false,
  onRequestClose,
}: MenuGalleryProps) {
  const md = useBreakpoint('md');
  const lg = useBreakpoint('lg');
  return (
    <Overlay
      className="menu-gallery"
      closeOnScrimClick={false}
      open={open}
      onRequestClose={onRequestClose}
    >
      {open && (
        <StaticQuery
          query={query}
          render={(data: MenuData) => {
            const items = [
              ...data.games.nodes,
              ...data.websites.nodes,
              ...data.art.nodes,
              ...data.tech.nodes,
              ...data.presentations.nodes,
              ...data.tutorials.nodes,
            ].sort((a, b) => {
              const x = location?.pathname.includes(a.category) ? -1 : 0;
              const y = location?.pathname.includes(b.category) ? -1 : 0;
              return x - y;
            });
            const numCols = lg ? 3 : md ? 2 : 1;
            const cols = new Array(numCols)
              .fill(0)
              .map((_, colIndex) =>
                items.filter((_, index) => index % numCols === colIndex),
              );
            return (
              <div className="menu-gallery__container">
                {cols.map((col, index) => (
                  <div
                    className="menu-gallery__col"
                    key={`col-${index}`}
                    style={{ width: `calc(100% / ${numCols})` }}
                  >
                    {col.map(item => (
                      <GatsbyLink
                        className="menu-gallery__thumbnail"
                        key={`${item.category}-${item.id}`}
                        to={`/${item.category}/${item.id}`}
                      >
                        <img
                          alt={`${item.title} Painting`}
                          width={item.image.sharp.original.width}
                          height={item.image.sharp.original.height}
                          src={item.image.sharp.original.src}
                        />
                        <div className="menu-gallery__caption">
                          <Text size="sm" type="caption" weight="500">
                            {item.title}
                          </Text>
                          <Text
                            className="opacity-muted"
                            size="xs"
                            type="caption"
                          >
                            {item.category}
                          </Text>
                        </div>
                      </GatsbyLink>
                    ))}
                  </div>
                ))}
              </div>
            );
          }}
        />
      )}
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
      }
    }
    tutorials: allTutorialsJson {
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
      }
    }
  }
`;
