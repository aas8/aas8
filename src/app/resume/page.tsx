import Link from "next/link";
import ResumeHead from "@/components/resume/ResumeHead";
import ResumeLinks from "@/components/resume/ResumeLinks";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import CertificationsSection from "@/components/resume/CertificationsSection";
import LanguagesSection from "@/components/resume/LanguagesSection";
import SkillsSection from "@/components/resume/SkillsSection";
import { resumeEN } from "@/components/resume/data";
import { personalInfo } from "@/components/resume/globals";

export default function ResumePage() {
  const d = resumeEN;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-start justify-between">
        <div />
        <Link
          href="/resume-br"
          className="rounded-md border border-zinc-200 px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
        >
          🇧🇷 Ver em Português
        </Link>
      </div>

      <div className="mt-4 space-y-8">
        <ResumeHead
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          location={personalInfo.location}
        />

        <ResumeLinks
          linkedin={personalInfo.linkedin}
          github={personalInfo.github}
        />

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        <ExperienceSection
          title="Professional Experience"
          items={d.experience.map((e) => ({
            role: e.title,
            company: e.company,
            duration: e.duration,
            bullets: e.bullets,
          }))}
        />

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        <EducationSection
          title="Education"
          items={d.education.map((e) => ({
            degree: e.title,
            institution: e.institution,
            year: e.year,
          }))}
        />

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        <CertificationsSection
          title="Certifications"
          items={d.certifications.map((c) => ({
            course: c.title,
            institution: c.institution,
          }))}
        />

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        <LanguagesSection
          title="Languages"
          languages={d.languages}
        />

        <div className="border-t border-zinc-200 dark:border-zinc-800" />

        <SkillsSection
          title="Skills"
          skills={d.skills}
        />
      </div>
    </div>
  );
}
