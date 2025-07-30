import { Badge, Col, Icon, Link, Row, Stack, Text, useBreakpoint, useMediaQuery } from '@zigurous/forge-react'; // prettier-ignore
import { graphql, type HeadFC } from 'gatsby';
import React, { useState } from 'react';
import { Metadata, Page } from '../components';
import { baseUri } from '../links';
import type { ResumeEducation, ResumeExperience, ResumeProject, ResumeQueryData, ResumeSkills } from '../types'; // prettier-ignore
import '../styles/resume.css';

interface ResumeProps {
  data: ResumeQueryData;
  location: Location;
}

export default function Resume({ data, location }: ResumeProps) {
  const resume = data.resume.nodes[0];
  return (
    <Page id="resume" hideHeader location={location}>
      <div className="container">
        <header className="row mb-lg">
          <Col className="mb-xl" size="12" lg="8">
            <Text
              as="h1"
              id="name"
              marginBottom="sm"
              type="display"
              weight="800"
            >
              {resume.name}
            </Text>
            <Text id="title" marginBottom="lg" type="subtitle">
              {resume.title}
            </Text>
            <Text
              id="summary"
              className="text-balance"
              color="subtle"
              type="body"
            >
              {resume.summary}
            </Text>
          </Col>
          <Col
            id="contact"
            className="flex flex-col justify-end mb-xl"
            style={{ gap: 'var(--spacing-sm)' }}
            size="12"
            lg="4"
          >
            {resume.contact.map(contact => (
              <Text
                id={contact.id}
                key={contact.id}
                className="inline-flex align-center"
                color="subtle"
                type="body-sm"
                weight="500"
              >
                <Icon
                  className="mr-sm"
                  icon={contact.icon}
                  type={
                    contact.id === 'github' || contact.id === 'linkedin'
                      ? 'social'
                      : 'material'
                  }
                />
                {contact.link ? (
                  <Link href={contact.link} external unstyled>
                    {contact.text}
                  </Link>
                ) : (
                  contact.text
                )}
              </Text>
            ))}
          </Col>
        </header>
        <Row>
          <Col size="12" lg="8">
            <ResumeExperience experience={resume.experience} />
          </Col>
          <Col size="12" lg="4">
            <ResumeEducation education={resume.education} />
            <ResumeSkills skills={resume.skills} />
          </Col>
        </Row>
        <ResumeProjects projects={resume.projects} />
      </div>
    </Page>
  );
}

interface ResumeSectionProps {
  children: React.ReactNode;
  icon?: string;
  id: string;
  title?: string;
}

function ResumeSection({ children, icon, id, title }: ResumeSectionProps) {
  const showIcons = false;
  return (
    <section id={id}>
      {title && (
        <Text as="h2" marginBottom="xl" type="title">
          {showIcons && icon && (
            <Icon
              className="mr-sm"
              icon={icon}
              size="md"
              style={{ verticalAlign: 'baseline' }}
            />
          )}
          {title}
        </Text>
      )}
      {children}
    </section>
  );
}

function ResumeEducation({ education }: { education: ResumeEducation[] }) {
  return (
    <ResumeSection icon="school" id="education" title="Education">
      {education.map(edu => (
        <div key={`${edu.school}-${edu.degree}`}>
          <Text id="school" marginBottom="xxs" type="title-sm">
            {edu.school}
          </Text>
          <Text
            id="degree"
            className="line-tight"
            color="subtle"
            marginBottom="xs"
            size="md"
            weight="500"
          >
            {edu.degree}
          </Text>
          {edu.notes?.map(note => (
            <Text
              className="line-tight"
              color="muted"
              marginBottom="xxxs"
              type="body-sm"
              key={note}
            >
              {note}
            </Text>
          ))}
        </div>
      ))}
    </ResumeSection>
  );
}

function ResumeExperience({ experience }: { experience: ResumeExperience[] }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <ResumeSection icon="work_history" id="experience" title="Experience">
      {experience.map(job => (
        <div className="relative" key={`${job.company}-${job.position}`}>
          <div aria-hidden className="timeline-line" />
          <div aria-hidden className="timeline-dot" />
          <div className="ml-xxl">
            <Text
              id="position"
              className="flex align-center"
              marginBottom="xxs"
              type="title-sm"
            >
              {job.position}{' '}
              <Text as="span" className="ml-xs" color="subtle" size="lg">
                @{' '}
                {job.link ? (
                  <Link href={job.link} external unstyled>
                    {job.company}
                  </Link>
                ) : (
                  job.company
                )}
              </Text>
            </Text>
            <Text id="date" color="muted" size="sm" type="caption" weight="600">
              {job.date}
            </Text>
            <Text
              color="subtle"
              marginBottom={job.notes ? 'lg' : undefined}
              marginTop="xs"
              type="body"
            >
              {job.summary}
            </Text>
            {job.notes && (
              <ul className="body">
                {job.notes.map(item => (
                  <li className="relative mb-sm" key={item.title}>
                    <div aria-hidden className="timeline-dot-small" />
                    <Text bold color="subtle" type="body">
                      {item.title}
                    </Text>
                    <Text id="description" color="subtle" type="body-sm">
                      {item.description}
                    </Text>
                  </li>
                ))}
                {job.more && (
                  <div className="print-none">
                    {!showMore && (
                      <Text className="link mt-sm" size="xs">
                        <button onClick={() => setShowMore(true)}>
                          Show More
                        </button>
                      </Text>
                    )}
                    {showMore && (
                      <>
                        <hr className="thick my-md" />
                        {job.more.map(item => (
                          <li className="relative mb-sm" key={item.title}>
                            <div aria-hidden className="timeline-dot-small" />
                            <Text bold color="subtle" type="body">
                              {item.title}
                            </Text>
                            <Text
                              id="description"
                              color="subtle"
                              type="body-sm"
                            >
                              {item.description}
                            </Text>
                          </li>
                        ))}
                        <Text className="mt-sm link" size="xs">
                          <button onClick={() => setShowMore(false)}>
                            Show Less
                          </button>
                        </Text>
                      </>
                    )}
                  </div>
                )}
              </ul>
            )}
          </div>
        </div>
      ))}
    </ResumeSection>
  );
}

function ResumeSkills({ skills }: { skills: ResumeSkills[] }) {
  return (
    <ResumeSection icon="psychology" id="skills" title="Skills">
      {skills.map(list => (
        <div className="mb-xl" key={list.title}>
          <Text color="subtle" marginBottom="sm" type="body-lg" weight="600">
            {list.title}
          </Text>
          <Stack spacing="xs" wrap>
            {list.items.map(item => (
              <Badge key={item} shape="rounded" size="sm" variant="tint">
                {item}
              </Badge>
            ))}
          </Stack>
        </div>
      ))}
    </ResumeSection>
  );
}

function ResumeProjects({ projects }: { projects: ResumeProject[] }) {
  const lg = useBreakpoint('lg', false);
  const print = useMediaQuery('print', false);
  return (
    <ResumeSection icon="apps" id="projects" title="Projects">
      {lg || print ? (
        <Row>
          <Col size="12" lg="6">
            <ul>
              {projects
                .filter((_, index) => index % 2 === 0)
                .map(project => (
                  <ResumeProject key={project.name} project={project} />
                ))}
            </ul>
          </Col>
          <Col size="12" lg="6">
            <ul>
              {projects
                .filter((_, index) => index % 2 === 1)
                .map(project => (
                  <ResumeProject key={project.name} project={project} />
                ))}
            </ul>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <ul>
              {projects.map(project => (
                <ResumeProject key={project.name} project={project} />
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </ResumeSection>
  );
}

function ResumeProject({ project }: { project: ResumeProject }) {
  return (
    <li
      className="mb-lg"
      id={project.name.toLowerCase().replace(' ', '-')}
      key={project.name}
    >
      <Stack align="center">
        <Text
          id="name"
          className="line-tight"
          color="primary"
          marginBottom="xxxs"
          type="body-lg"
          weight="600"
        >
          <Link href={project.link} external unstyled>
            {project.name}
          </Link>
        </Text>
        {project.tech && (
          <Text
            id="tech"
            className="mt-xxxs ml-sm"
            color="muted"
            size="xs"
            type="caption"
            weight="600"
          >
            {project.tech.map((tech, index) => (
              <span key={tech}>
                {tech}
                {index < project.tech!.length - 1 ? ', ' : ''}
              </span>
            ))}
          </Text>
        )}
      </Stack>
      <Text id="description" color="subtle" type="body">
        {project.description}
      </Text>
    </li>
  );
}

export const Head: HeadFC = () => {
  return (
    <Metadata
      page={{
        url: `${baseUri}/resume`,
        title: 'Adam Graham • Resume',
      }}
    />
  );
};

export const query = graphql`
  query ResumeQuery {
    resume: allResumeJson {
      nodes {
        name
        title
        summary
        contact {
          id
          icon
          text
          link
        }
        education {
          school
          degree
          notes
        }
        experience {
          date
          company
          position
          summary
          link
          notes {
            title
            description
          }
          more {
            title
            description
          }
        }
        skills {
          title
          items
        }
        projects {
          name
          description
          link
          tech
        }
      }
    }
  }
`;
