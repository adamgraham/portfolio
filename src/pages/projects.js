import { Badge, Link } from '@zigurous/react-components';
import classNames from 'classnames';
import { graphql, Link as GatsbyLink, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Page } from '../components';
import { baseUri } from '../links';
import '../styles/projects-list.css';

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

const filters = ['React', 'iOS', 'Unity', 'VR/AR', '3D', '2D'];

const Projects = ({ data, location }) => {
  const filter = useMemo(() => {
    const urlParams = new URLSearchParams(location?.search);
    return urlParams.has('filter') ? urlParams.get('filter') : null;
  }, [location]);

  const filteredCategories = useMemo(() => {
    if (!filter) return data.json.categories;
    return data.json.categories.map((category) => {
      const projects = category.projects.map((project) => ({
        ...project,
        hidden: !project.tags.includes(filter),
      }));
      return {
        title: category.title,
        projects,
        empty: projects.every((project) => project.hidden),
      };
    });
  }, [data, filter]);

  return (
    <Page
      id="projects"
      location={location}
      metadata={{
        url: baseUri,
        title: 'Adam Graham • Projects',
      }}
    >
      <article className="projects-list container-lg">
        <section className="projects-list__header">
          <h1 className="display-4">Projects</h1>
          <div className="projects-list__filters">
            {filters.map((tag) => (
              <button
                onClick={() => {
                  if (filter === tag) {
                    navigate(`${location.pathname}${location.hash}`, {
                      replace: true,
                    });
                  } else {
                    navigate(
                      `${location.pathname}${location.hash}?filter=${tag}`,
                      { replace: true }
                    );
                  }
                }}
                key={tag}
              >
                <Badge
                  className={classNames({ 'badge--selected': filter === tag })}
                  pill
                >
                  {tag}
                </Badge>
              </button>
            ))}
          </div>
        </section>
        {filteredCategories.map((category) => (
          <section
            className={classNames('projects-list__category', {
              'projects-list__category--empty': category.empty,
            })}
            key={category.title}
          >
            <h2 className="h6">{category.title}</h2>
            <ul>
              {category.projects.map((project) => (
                <li
                  className={classNames('projects-list__item', {
                    'projects-list__item--hidden': project.hidden,
                  })}
                  key={project.title}
                >
                  <Link
                    ElementType={project.link ? GatsbyLink : 'a'}
                    external={Boolean(project.externalLink && !project.link)}
                    key={project.title}
                    target="_blank"
                    to={project.link || project.externalLink}
                    unstyled
                  >
                    <div className="projects-list__text">
                      <span className="projects-list__title">
                        {project.title}
                      </span>
                      <span className="projects-list__description">
                        {project.description}
                      </span>
                    </div>
                    <hr className="projects-list__line" />
                    <div className="projects-list__date">{project.date}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </Page>
  );
};

Projects.propTypes = {
  data: PropTypes.shape({
    json: PropTypes.shape({
      title: PropTypes.string,
      Projects: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          date: PropTypes.string,
          link: PropTypes.string,
          externalLink: PropTypes.string,
          tags: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    }),
  }),
  location: PropTypes.object,
};

export default Projects;
