"use client";

import React from "react";
import { Award, Briefcase, Code2, GraduationCap, Rocket, Users } from "lucide-react";
import { Timeline } from "../components/ui/timeline";

type Tone = "blue" | "purple" | "green" | "amber" | "rose" | "emerald";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const toneStyles: Record<
  Tone,
  {
    iconWrap: string;
    icon: string;
    dot: string;
    tag: string;
    metric: string;
  }
> = {
  blue: {
    iconWrap: "bg-blue-900/20",
    icon: "text-blue-400",
    dot: "bg-blue-500",
    tag: "bg-blue-900/30 text-blue-300",
    metric: "text-blue-400",
  },
  purple: {
    iconWrap: "bg-purple-900/20",
    icon: "text-purple-400",
    dot: "bg-purple-500",
    tag: "bg-purple-900/30 text-purple-300",
    metric: "text-purple-400",
  },
  green: {
    iconWrap: "bg-green-900/20",
    icon: "text-green-400",
    dot: "bg-green-500",
    tag: "bg-green-900/30 text-green-300",
    metric: "text-green-400",
  },
  amber: {
    iconWrap: "bg-amber-900/20",
    icon: "text-amber-400",
    dot: "bg-amber-500",
    tag: "bg-amber-900/30 text-amber-300",
    metric: "text-amber-400",
  },
  rose: {
    iconWrap: "bg-rose-900/20",
    icon: "text-rose-400",
    dot: "bg-rose-500",
    tag: "bg-rose-900/30 text-rose-300",
    metric: "text-rose-400",
  },
  emerald: {
    iconWrap: "bg-emerald-900/20",
    icon: "text-emerald-400",
    dot: "bg-emerald-500",
    tag: "bg-emerald-900/30 text-emerald-300",
    metric: "text-emerald-400",
  },
};

function TimelineCard({
  icon: Icon,
  title,
  subtitle,
  meta,
  bullets,
  tags,
  tone,
}: {
  icon: IconComponent;
  title: string;
  subtitle: string;
  meta: string;
  bullets: string[];
  tags: string[];
  tone: Tone;
}) {
  const styles = toneStyles[tone];

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className={`mt-1 rounded-lg p-2 ${styles.iconWrap}`}>
          <Icon className={`h-5 w-5 ${styles.icon}`} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
          <p className="mt-2 text-sm text-zinc-300">{meta}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-zinc-300">
            <span className={`mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full ${styles.dot}`} />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <span key={tag} className={`rounded-full px-3 py-1 text-xs ${styles.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
}) {
  return (
    <div className="rounded-lg bg-zinc-800/30 p-4">
      <div className={`text-sm font-semibold ${toneStyles[tone].metric}`}>{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{detail}</div>
    </div>
  );
}

const data = [
  {
    title: "Jun - Jul 2026",
    content: (
      <TimelineCard
        icon={Briefcase}
        title="J.P. Morgan Software Engineering Job Simulation"
        subtitle="Forage virtual job simulation"
        meta="Remote - Financial technology software engineering"
        bullets={[
          "Completed a practical job simulation focused on real-world software engineering workflows.",
          "Applied debugging, feature-building, and code review practices in a professional finance context.",
          "Strengthened frontend, API, and Git-based development habits through task-based project work.",
        ]}
        tags={["Forage", "Software Engineering", "JavaScript", "Git"]}
        tone="blue"
      />
    ),
  },
  {
    title: "Aug - Dec 2025",
    content: (
      <TimelineCard
        icon={Rocket}
        title="AI & Prompt Engineering Experience"
        subtitle="LLM application workflows and AI-assisted development"
        meta="Remote"
        bullets={[
          "Developed structured prompts for AI systems to improve response accuracy and workflow automation.",
          "Worked with LLM-based applications using OpenAI APIs and prompt optimization techniques.",
          "Built AI-assisted solutions for content generation, summarization, and chatbot interactions.",
          "Explored Retrieval-Augmented Generation concepts and AI integration in web applications.",
        ]}
        tags={["OpenAI APIs", "Prompt Engineering", "RAG", "AI Apps"]}
        tone="purple"
      />
    ),
  },
  {
    title: "2023 - 2024",
    content: (
      <TimelineCard
        icon={Users}
        title="Organizing Team Member - Coding Blocks CUIET Chapter"
        subtitle="Coding workshops, outreach, and community events"
        meta="Chitkara University"
        bullets={[
          "Conducted coding workshops using Google Workspace and increased participant engagement by 25%.",
          "Led event strategy and outreach, expanding the community audience by 30%.",
          "Collaborated with student teams to plan technical sessions and improve event participation.",
        ]}
        tags={["Leadership", "Workshops", "Google Workspace", "Community"]}
        tone="green"
      />
    ),
  },
  {
    title: "2022",
    content: (
      <TimelineCard
        icon={GraduationCap}
        title="B.E. Computer Science - Chitkara University"
        subtitle="Final-year Computer Science student"
        meta="CGPA 8.06 - Rajpura, Punjab"
        bullets={[
          "Built a strong foundation in DSA, OOP, DBMS, operating systems, and computer networks.",
          "Developed full-stack MERN and AI-powered applications through academic and personal projects.",
          "Practiced scalable, responsive, and secure application development with modern web tools.",
        ]}
        tags={["Computer Science", "MERN Stack", "DSA", "System Design"]}
        tone="amber"
      />
    ),
  },
  {
    title: "Highlights",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-emerald-900/20 p-2">
            <Award className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Achievements & Certifications</h3>
            <p className="mt-1 text-sm text-zinc-400">Resume highlights and learning milestones</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <MetricCard
            label="CGPA"
            value="8.06"
            detail="B.E. Computer Science at Chitkara University"
            tone="emerald"
          />
          <MetricCard
            label="Core Projects"
            value="4+"
            detail="EventSnap, AI Resume Analyzer, Multi-Movies, E-Commerce"
            tone="blue"
          />
          <MetricCard
            label="Engagement Growth"
            value="25%"
            detail="Improved workshop participation at Coding Blocks"
            tone="green"
          />
          <MetricCard
            label="Community Reach"
            value="30%"
            detail="Expanded event audience through outreach"
            tone="amber"
          />
        </div>
        <div className="rounded-lg bg-zinc-800/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">Certifications & Focus</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">
              IBM Applied DevOps Engineering
            </span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">
              CI/CD
            </span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">
              Docker
            </span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">
              Kubernetes
            </span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">
              Jenkins
            </span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-4 pt-20 md:p-8 lg:pt-20 xl:pt-30">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <div className="inline-block rounded-full bg-blue-900/20 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-400">Career Timeline</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Experience from my journey
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Final-year Computer Science student building AI-powered and full-stack web applications.
            <br />
            Here is my timeline across simulations, AI work, community leadership, and education.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-zinc-400">Job Simulation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm text-zinc-400">AI Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-zinc-400">Community</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-sm text-zinc-400">Education</span>
            </div>
          </div>
        </div>

        <Timeline data={data} />

        <div className="mt-12 rounded-xl bg-zinc-900/50 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-zinc-800 p-3">
              <Code2 className="h-6 w-6 text-zinc-300" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Skills & Tools</h3>
              <p className="text-sm text-zinc-400">Technologies from my resume and project work</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-blue-400">Languages</div>
              <div className="mt-2 text-xs text-zinc-300">JavaScript, Python, Java, C++</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-emerald-400">Frontend</div>
              <div className="mt-2 text-xs text-zinc-300">React.js, HTML, CSS, Tailwind CSS</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-purple-400">Backend</div>
              <div className="mt-2 text-xs text-zinc-300">Node.js, Express.js, FastAPI, REST APIs</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-amber-400">Data</div>
              <div className="mt-2 text-xs text-zinc-300">MongoDB, FAISS, DeepFace, GenAI</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-rose-400">AI</div>
              <div className="mt-2 text-xs text-zinc-300">OpenAI APIs, Prompt Engineering, RAG</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-cyan-400">Tools</div>
              <div className="mt-2 text-xs text-zinc-300">Git, GitHub, Postman, VS Code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
