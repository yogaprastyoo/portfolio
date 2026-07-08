import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "@/components/content/SkillGroup";
import { ContactList } from "@/components/content/ContactList";
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
        <section className="py-24 md:py-36">
          <h1 className="enter text-[clamp(3rem,10vw,7rem)] leading-[0.95] font-medium tracking-tight">
            Yoga Prastyo<span className="text-accent">.</span>
          </h1>
          <p className="enter enter-2 mt-8 max-w-xl text-base text-neutral-700 dark:text-neutral-300">
            Full Stack Developer building REST APIs, IoT systems, and humanoid robots — experienced
            in Laravel, React, Next.js, ThingsBoard, and ROS.
          </p>
          <Link
            href="/projects"
            className="enter enter-3 mt-10 inline-block border border-current px-6 py-3 text-sm hover:bg-neutral-900 hover:text-white motion-safe:transition-colors dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
          >
            View projects
          </Link>
        </section>

        <section id="about" className="reveal scroll-mt-8 border-t border-dashed border-neutral-300 py-24 md:py-32 dark:border-neutral-700">
          <SectionHeading number="01" title="Get to know me" />
          <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-neutral-300">
            Hello! I&apos;m Yoga Prastyo Bayu Laksono — a student and Full Stack Developer
            experienced in building scalable backend systems and interactive web apps. My passion
            lies in IoT architecture, DevOps practices, and humanoid robotics with ROS.
          </p>
        </section>

        <section id="skills" className="reveal scroll-mt-8 border-t border-dashed border-neutral-300 py-24 md:py-32 dark:border-neutral-700">
          <SectionHeading number="02" title="Skills & technologies" />
          <div className="mt-6 space-y-6">
            {(Object.keys(CATEGORY_LABELS) as SkillCategory[]).map((cat) => (
              <SkillGroup key={cat} title={CATEGORY_LABELS[cat]} skills={current.filter((s) => s.category === cat)} />
            ))}
            <SkillGroup title="Currently learning" skills={learning} />
          </div>
        </section>

        <section id="project" className="reveal scroll-mt-8 border-t border-dashed border-neutral-300 py-24 md:py-32 dark:border-neutral-700">
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

        <section id="contact" className="reveal scroll-mt-8 border-t border-dashed border-neutral-300 py-24 md:py-32 dark:border-neutral-700">
          <SectionHeading number="04" title="Let's turn ideas into reality" />
          <ContactList
            items={[
              {
                label: "Email",
                description: "The fastest way to reach me — I usually reply within a day.",
                href: `mailto:${SITE.email}`,
              },
              {
                label: "LinkedIn",
                description: "Let's connect professionally.",
                href: SITE.linkedin,
              },
              {
                label: "GitHub",
                description: "See what I'm building right now.",
                href: SITE.github,
              },
            ]}
          />
        </section>
      </Container>
    </main>
  );
}
