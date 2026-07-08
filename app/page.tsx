import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/content/SkillGroup";
import { ProjectCard } from "@/components/content/ProjectCard";
import { getFeaturedProjects, getSkills } from "@/lib/queries";
import { SITE } from "@/lib/seo";
import type { SkillCategory } from "@/lib/types";

export const revalidate = 300;

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  backend: "Backend",
  frontend: "Frontend",
  "iot-robotics": "IoT & Robotics",
  devops: "DevOps",
  database: "Database",
};

export default async function HomePage() {
  const [skills, projects] = await Promise.all([getSkills(), getFeaturedProjects()]);
  const current = skills.filter((s) => !s.isLearning);
  const learning = skills.filter((s) => s.isLearning);

  return (
    <main id="main-content">
      <Container>
        <section className="py-20">
          <h1 className="text-4xl font-medium leading-tight sm:text-6xl">
            Yoga Prastyo<span className="text-accent">.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-700 dark:text-neutral-300">
            Full Stack Developer building REST APIs, IoT systems, and humanoid robots — experienced
            in Laravel, React, Next.js, ThingsBoard, and ROS.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-block border border-current px-5 py-3 text-sm hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
          >
            View projects
          </Link>
        </section>

        <section id="about" className="scroll-mt-8 border-t border-dashed border-neutral-300 py-16 dark:border-neutral-700">
          <SectionHeading number="01" title="Get to know me" />
          <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            Hello! I&apos;m Yoga Prastyo Bayu Laksono — a student and Full Stack Developer
            experienced in building scalable backend systems and interactive web apps. My passion
            lies in IoT architecture, DevOps practices, and humanoid robotics with ROS.
          </p>
        </section>

        <section id="skills" className="scroll-mt-8 border-t border-dashed border-neutral-300 py-16 dark:border-neutral-700">
          <SectionHeading number="02" title="Skills & technologies" />
          <div className="mt-6 space-y-6">
            {(Object.keys(CATEGORY_LABELS) as SkillCategory[]).map((cat) => (
              <SkillGroup key={cat} title={CATEGORY_LABELS[cat]} skills={current.filter((s) => s.category === cat)} />
            ))}
            <SkillGroup title="Currently learning" skills={learning} />
          </div>
        </section>

        <section id="project" className="scroll-mt-8 border-t border-dashed border-neutral-300 py-16 dark:border-neutral-700">
          <SectionHeading number="03" title="Check out my latest work" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} number={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
          <Link href="/projects" className="mt-6 inline-block text-sm underline underline-offset-4">
            All projects →
          </Link>
        </section>

        <section id="contact" className="scroll-mt-8 border-t border-dashed border-neutral-300 py-16 dark:border-neutral-700">
          <SectionHeading number="04" title="Let's turn ideas into reality" />
          <ul className="mt-6 divide-y divide-neutral-200 dark:divide-neutral-800">
            {[
              { label: "Email", href: `mailto:${SITE.email}` },
              { label: "LinkedIn", href: SITE.linkedin },
              { label: "GitHub", href: SITE.github },
            ].map((c) => {
              const isExternal = c.href.startsWith("http");
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-4 text-2xl hover:text-accent"
                  >
                    {c.label} <span aria-hidden>↗</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </main>
  );
}
