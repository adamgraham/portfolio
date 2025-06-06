import '../styles/project.css';
import { Badge, clamp, EmbeddedYouTube, ImageGallery, Link, ProgressiveImage, Stack, Text } from '@zigurous/forge-react'; // prettier-ignore
import React from 'react';
import type { ProjectData } from '../types';

export interface ProjectProps {
  project: ProjectData;
}

export default function Project({ project }: ProjectProps) {
  return (
    <article className="project container-md">
      <section>
        <Text
          as="h1"
          className="project__title"
          marginBottom="sm"
          type="display"
          weight="700"
        >
          {project.title}
        </Text>
        <Text
          className="project__subtitle ml-xxs"
          color="muted"
          marginBottom="md"
          size="sm"
          transform="capitalize"
          weight="600"
        >
          {project.date}
          <span className="separator mx-sm opacity-muted">|</span>
          {project.role}
        </Text>
        {project.tech && (
          <Stack className="project__badges" spacing="sm" wrap>
            {project.tech.map(tech => (
              <Badge color="primary" key={tech} variant="tint">
                {tech}
              </Badge>
            ))}
          </Stack>
        )}
        <div className="project__description text-pretty mt-xl mb-lg">
          {project.description && (
            <Text className="opacity-90" type="body">
              {project.description}
            </Text>
          )}
          {project.description_long &&
            project.description_long.map(description => (
              <Text className="opacity-90 mt-lg" key={description} type="body">
                {description}
              </Text>
            ))}
        </div>
      </section>
      {project.sections &&
        project.sections.map((section, index) => (
          <section key={`section-${index}`}>
            {section.title && (
              <Text
                as="h2"
                className="subtitle"
                marginBottom="sm"
                type="title-sm"
              >
                {section.link ? (
                  <Link external href={section.link}>
                    <b>{section.title}</b>
                  </Link>
                ) : (
                  <b>{section.title}</b>
                )}
              </Text>
            )}
            {section.mainImage &&
              (section.mainImageLink ? (
                <Link external href={section.mainImageLink} unstyled>
                  <ProgressiveImage
                    alt={`${project.title} Screenshot`}
                    width={section.mainImage.sharp.original.width}
                    height={section.mainImage.sharp.original.height}
                    src={section.mainImage.sharp.original.src}
                  />
                </Link>
              ) : (
                <ProgressiveImage
                  alt={`${project.title} Screenshot`}
                  width={section.mainImage.sharp.original.width}
                  height={section.mainImage.sharp.original.height}
                  src={section.mainImage.sharp.original.src}
                />
              ))}
            {section.mainVideo && (
              <EmbeddedYouTube
                origin="https://adamgraham.github.io"
                videoId={section.mainVideo}
              />
            )}
            {section.paragraphs &&
              section.paragraphs.map((paragraph, paragraphIndex) => (
                <Text
                  color="subtle"
                  key={`section-${index}-paragraph-${paragraphIndex}`}
                  marginBottom="lg"
                  type="body-sm"
                >
                  {paragraph}
                </Text>
              ))}
            {section.gallery && (
              <ImageGallery
                rounded
                images={section.gallery.map(image => ({
                  className: 'inline-block',
                  width: clamp(image.sharp.original.width || 0, 0, 1280),
                  height: clamp(image.sharp.original.height || 0, 0, 720),
                  src: image.sharp.original.src,
                }))}
                lightboxProps={{
                  loop: true,
                }}
                minWidth={132}
              />
            )}
            {section.videos &&
              section.videos.map(video => (
                <EmbeddedYouTube
                  className="mb-lg"
                  key={video}
                  origin="https://adamgraham.github.io"
                  videoId={video}
                />
              ))}
          </section>
        ))}
    </article>
  );
}
