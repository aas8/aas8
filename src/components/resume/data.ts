import { personalInfo } from "./globals";

export interface ResumeData {
  experience: {
    title: string;
    company: string;
    duration: string;
    bullets: string[];
  }[];
  education: {
    title: string;
    institution: string;
    year: string;
  }[];
  certifications: {
    title: string;
    institution: string;
  }[];
  languages: string[];
  skills: string[];
}

export const resumeEN: ResumeData = {
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      duration: "Jan 2024 -- Present",
      bullets: [
        "Responsibility or achievement one",
        "Responsibility or achievement two",
        "Responsibility or achievement three",
      ],
    },
    {
      title: "Previous Role",
      company: "Previous Company",
      duration: "Mar 2022 -- Dec 2023",
      bullets: [
        "Responsibility or achievement one",
        "Responsibility or achievement two",
      ],
    },
  ],
  education: [
    {
      title: "Degree Name",
      institution: "University Name",
      year: "2022",
    },
  ],
  certifications: [
    {
      title: "Course Title",
      institution: "Issuing Institution",
    },
  ],
  languages: ["Portuguese -- Native", "English -- Fluent"],
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "Git"],
};

export const resumeBR: ResumeData = {
  experience: [
    {
      title: "Cargo",
      company: "Nome da Empresa",
      duration: "Jan 2024 -- Presente",
      bullets: [
        "Responsabilidade ou conquista um",
        "Responsabilidade ou conquista dois",
        "Responsabilidade ou conquista três",
      ],
    },
    {
      title: "Cargo Anterior",
      company: "Empresa Anterior",
      duration: "Mar 2022 -- Dez 2023",
      bullets: [
        "Responsabilidade ou conquista um",
        "Responsabilidade ou conquista dois",
      ],
    },
  ],
  education: [
    {
      title: "Nome do Curso",
      institution: "Nome da Universidade",
      year: "2022",
    },
  ],
  certifications: [
    {
      title: "Nome do Curso",
      institution: "Instituição Emissora",
    },
  ],
  languages: ["Português -- Nativo", "Inglês -- Fluente"],
  skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "Git"],
};
