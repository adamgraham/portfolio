export interface Resume {
  name: string;
  title: string;
  summary: string;
  contact: ResumeContact[];
  education: ResumeEducation[];
  experience: ResumeExperience[];
  skills: ResumeSkills[];
  projects: ResumeProject[];
}

export interface ResumeContact {
  id: string;
  icon: string;
  text: string;
  link?: string;
}

export interface ResumeEducation {
  school: string;
  degree: string;
  notes?: string[];
}

export interface ResumeExperience {
  date: string;
  company: string;
  position: string;
  summary: string;
  link?: string;
  linkText?: string;
  notes?: ResumeExperienceNote[];
  more?: ResumeExperienceNote[];
}

export interface ResumeExperienceNote {
  title: string;
  description: string;
}

export interface ResumeSkills {
  title: string;
  items: string[];
}

export interface ResumeProject {
  name: string;
  description: string;
  link: string;
  tech?: string[];
}

export interface ResumeQueryData {
  resume: {
    nodes: Resume[];
  };
}
