import { Badge, Link, Stack, Text } from '@zigurous/forge-react';
import classNames from 'classnames';
import { graphql, Link as GatsbyLink, navigate, type HeadFC } from 'gatsby';
import React, { useMemo } from 'react';
import { Metadata, Page } from '../components';
import { baseUri } from '../links';
import '../styles/projects-list.css';

interface ProjectsCategory {
  title: string;
  projects: ProjectsProject[];
  empty?: boolean;
}

interface ProjectsProject {
  title: string;
  description: string;
  date: string;
  link: string;
  externalLink: string;
  tags: string[];
  hidden?: boolean;
}

interface ProjectsProps {
  data: {
    json: {
      categories: ProjectsCategory[];
    };
  };
  location: Location;
}

const filters = ['React', 'iOS', 'Unity', 'VR/AR', '3D', '2D'];

export default function Projects({ data, location }: ProjectsProps) {
  const filter = useMemo<string | null>(() => {
    const urlParams = new URLSearchParams(location?.search);
    return urlParams.has('filter') ? urlParams.get('filter') : null;
  }, [location]);

  const filteredCategories = useMemo<ProjectsCategory[]>(() => {
    if (!filter) return data.json.categories;
    return data.json.categories.map(category => {
      const projects = category.projects.map(project => ({
        ...project,
        hidden: !project.tags.includes(filter),
      }));
      return {
        title: category.title,
        projects,
        empty: projects.every(project => project.hidden),
      };
    });
  }, [data, filter]);

  return (
    <Page id="projects" location={location}>
      <article className="projects-list container-lg">
        <section className="projects-list__header">
          <Text as="h1" marginBottom="lg" type="display">
            Projects
          </Text>
          <Stack align="center" spacing="sm" wrap>
            {filters.map(tag => (
              <Badge
                color="primary"
                interactive
                key={tag}
                onClick={() => {
                  if (filter === tag) {
                    navigate(`${location.pathname}${location.hash}`, {
                      replace: true,
                    });
                  } else {
                    navigate(
                      `${location.pathname}${location.hash}?filter=${tag}`,
                      { replace: true },
                    );
                  }
                }}
                selected={filter === tag}
                size="md"
                variant="tint"
              >
                {tag}
              </Badge>
            ))}
          </Stack>
        </section>
        {filteredCategories.map(category => (
          <section
            className={classNames('projects-list__category', {
              'projects-list__category--empty': category.empty,
            })}
            key={category.title}
          >
            <Text as="h2" type="title-sm" weight="700">
              {category.title}
            </Text>
            <ul>
              {category.projects.map(project => (
                <li
                  className={classNames('projects-list__item', {
                    'projects-list__item--hidden': project.hidden,
                  })}
                  key={project.title}
                >
                  <Link
                    as={project.link ? GatsbyLink : 'a'}
                    external={Boolean(project.externalLink && !project.link)}
                    href={project.link || project.externalLink}
                    key={project.title}
                    target="_blank"
                    unstyled
                  >
                    <div className="projects-list__text">
                      <Text
                        as="span"
                        className="projects-list__title mr-sm"
                        type="body-sm"
                        weight="600"
                      >
                        {project.title}
                      </Text>
                      <Text
                        as="span"
                        className="projects-list__description"
                        color="muted"
                        type="body-sm"
                      >
                        {project.description}
                      </Text>
                    </div>
                    <hr className="projects-list__line" />
                    <Text
                      className="projects-list__date"
                      color="muted"
                      type="body-sm"
                    >
                      {project.date}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </Page>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: baseUri,
        title: 'Adam Graham • Projects',
      }}
    />
  );
};

export const query = graphql`
  query Projects {
    json: allProjectsJson {
      categories: nodes {
        title
        projects {
          title
          description
          date
          link
          externalLink
          tags
        }
      }
    }
  }
`;
