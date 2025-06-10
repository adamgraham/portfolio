import { Icon, Link, Stack, Text } from '@zigurous/forge-react';
import { graphql, type HeadFC, Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { Metadata, Page, ShadowButton } from '../components';
import { baseUri } from '../links';
import logos from '../logos';
import '../styles/projects-list.css';

interface ProjectsCategory {
  title: string;
  columns?: number;
  projects: Project[];
}

interface Project {
  title: string;
  description: string;
  date: string;
  link: string;
  externalLink?: string;
  ctaIcon?: string;
  ctaLabel?: string;
  color?: string;
  tags: string[];
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
  const urlParams = new URLSearchParams(location?.search);
  const filter = urlParams.has('filter') ? urlParams.get('filter') : null;
  return (
    <Page id="projects" location={location}>
      <article className="projects-list container-xl">
        {data.json.categories
          .filter(
            category =>
              !filter ||
              category.projects.some(project => project.tags.includes(filter)),
          )
          .map((category, index, array) => (
            <section key={category.title}>
              <Text
                as="h2"
                className="mt-xl mb-xxl ml-xxxs"
                type="title"
                weight="700"
              >
                {category.title}
              </Text>
              <ul
                className="projects-list__list"
                style={{
                  gridTemplateColumns: category.columns
                    ? `repeat(${category.columns}, 1fr)`
                    : undefined,
                }}
              >
                {category.projects
                  .filter(project => !filter || project.tags.includes(filter))
                  .map(project => (
                    <li
                      className="projects-list__item"
                      key={project.title}
                      style={{
                        backgroundImage: project.color
                          ? `linear-gradient(to top, transparent, ${project.color})`
                          : undefined,
                      }}
                    >
                      <Link
                        as={project.externalLink ? 'a' : GatsbyLink}
                        external={Boolean(project.externalLink)}
                        href={project.externalLink || project.link}
                        target="_blank"
                        unstyled
                      >
                        <div className="mb-xxxl">
                          <Text
                            className="line-tight"
                            color="subtle"
                            marginBottom="sm"
                            type="body-lg"
                            weight="700"
                          >
                            {project.title}
                          </Text>
                          <Text
                            className="text-pretty"
                            color="muted"
                            marginBottom="sm"
                            type="body-sm"
                          >
                            {project.description}
                          </Text>
                        </div>
                        <Stack
                          className="w-full"
                          justify="between"
                          align="center"
                        >
                          {(project.link || project.externalLink) && (
                            <ShadowButton
                              className="px-xl"
                              icon={
                                project.ctaIcon ||
                                (project.externalLink
                                  ? 'open_in_new'
                                  : undefined)
                              }
                              iconAlignment={
                                !project.ctaIcon && !project.externalLink
                                  ? 'trailing'
                                  : 'leading'
                              }
                              iconProps={{
                                type: project.ctaIcon ? 'social' : 'material',
                              }}
                            >
                              {project.ctaLabel || 'Details'}
                            </ShadowButton>
                          )}
                          <Stack
                            align="center"
                            justify="end"
                            spacing="xxs"
                            wrap
                          >
                            {project.tags.map(tag => (
                              <Icon icon={logos[tag]} key={tag} size="18px" />
                            ))}
                          </Stack>
                        </Stack>
                      </Link>
                    </li>
                  ))}
              </ul>
              {index !== array.length - 1 && (
                <hr className="my-2xxl opacity-disabled" />
              )}
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
        columns
        projects {
          title
          description
          date
          link
          externalLink
          ctaIcon
          ctaLabel
          color
          tags
        }
      }
    }
  }
`;
