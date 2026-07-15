"use client";
import React from "react";
import { Award, Briefcase, Code2, GraduationCap, Rocket, Users } from "lucide-react";
import { Timeline } from "../components/ui/timeline";

const data = [
  {
    title: "2023 - Present",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-blue-900/20 p-2">
            <Rocket className="h-5 w-5 text-blue-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Founding Engineer · Hexagon Digital Services
            </h3>
            <p className="mt-1 text-sm text-zinc-400">Building Copilot for Insurance Industry</p>
            <p className="mt-2 text-sm text-zinc-300">Series A Startup · Remote</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            Leading UI/UX for Copilot to automate insurance workflows
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            Built Kay Admin App, Client App, and Demo Instance
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
            Experimenting with emerging AI models and UX paradigms
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">React</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">TypeScript</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Tailwind</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Python</span>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-purple-900/20 p-2">
            <Code2 className="h-5 w-5 text-purple-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Co-Founder / CTO · Hexagon Digital Services
            </h3>
            <p className="mt-1 text-sm text-zinc-400">Designed and developed LLMOps Platform</p>
            <p className="mt-2 text-sm text-zinc-300">Pre-Seed Startup · 6 Team Members</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
            Led design and development of LLMOps Platform
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
            Built proxy middleware with Cloudflare Workers (sub-20ms)
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
            Created LLM-Powered Apps: Divedash &amp; Almada
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">React</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">TypeScript</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Rails</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">AWS</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Cloudflare</span>
        </div>
      </div>
    ),
  },
  {
    title: "2021 - 2022",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-green-900/20 p-2">
            <Users className="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Co-Founder / CTO · EngageBud</h3>
            <p className="mt-1 text-sm text-zinc-400">Developed platforms handling 13M+ users</p>
            <p className="mt-2 text-sm text-zinc-300">Seed Funded · 5 Team Members</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            Developed Influencerbit &amp; Engagebud platforms
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            Scaled backend to handle 13M+ users, 6M+ discount codes
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            Raised $100K funding from Upekkha accelerator
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">React</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Rails</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">PostgreSQL</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">TypeScript</span>
        </div>
      </div>
    ),
  },
  {
    title: "2020 - 2021",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-amber-900/20 p-2">
            <Briefcase className="h-5 w-5 text-amber-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Product Engineer · ProfileBud</h3>
            <p className="mt-1 text-sm text-zinc-400">Led frontend development for 20M+ users</p>
            <p className="mt-2 text-sm text-zinc-300">Early Stage Startup · Founding Team</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Led frontend development as founding member
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Created responsive websites and payment portals
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Developed GoLang server for 20M+ users, 1K+ req/s
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">React</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">GoLang</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Gatsby</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Rails</span>
        </div>
      </div>
    ),
  },
  {
    title: "2019 - 2020",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-rose-900/20 p-2">
            <GraduationCap className="h-5 w-5 text-rose-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Freelance Developer &amp; Student</h3>
            <p className="mt-1 text-sm text-zinc-400">Built projects while completing education</p>
            <p className="mt-2 text-sm text-zinc-300">Independent Projects · Self-Learning</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
            Developed multiple web applications for local businesses
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
            Learned modern web development stack through projects
          </li>
          <li className="flex items-start gap-2 text-sm text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
            Contributed to open source projects on GitHub
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">JavaScript</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">HTML/CSS</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">Node.js</span>
          <span className="rounded-full bg-zinc-800/50 px-3 py-1 text-xs text-zinc-300">MongoDB</span>
        </div>
      </div>
    ),
  },
  {
    title: "Key Achievements",
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-emerald-900/20 p-2">
            <Award className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Milestones &amp; Recognition</h3>
            <p className="mt-1 text-sm text-zinc-400">Significant achievements across journey</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          <div className="rounded-lg bg-zinc-800/30 p-4">
            <div className="text-sm font-semibold text-emerald-400">Funding Raised</div>
            <div className="mt-1 text-2xl font-bold text-white">$100K+</div>
            <div className="mt-1 text-xs text-zinc-400">From accelerators &amp; investors</div>
          </div>
          <div className="rounded-lg bg-zinc-800/30 p-4">
            <div className="text-sm font-semibold text-emerald-400">Users Served</div>
            <div className="mt-1 text-2xl font-bold text-white">33M+</div>
            <div className="mt-1 text-xs text-zinc-400">Across all platforms</div>
          </div>
          <div className="rounded-lg bg-zinc-800/30 p-4">
            <div className="text-sm font-semibold text-emerald-400">Startups Founded</div>
            <div className="mt-1 text-2xl font-bold text-white">3</div>
            <div className="mt-1 text-xs text-zinc-400">As Co-Founder/CTO</div>
          </div>
          <div className="rounded-lg bg-zinc-800/30 p-4">
            <div className="text-sm font-semibold text-emerald-400">Years Experience</div>
            <div className="mt-1 text-2xl font-bold text-white">5+</div>
            <div className="mt-1 text-xs text-zinc-400">Building at scale</div>
          </div>
        </div>
        <div className="rounded-lg bg-zinc-800/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">Specializations</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">AI/ML Applications</span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">Startup Scaling</span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">Full-Stack Development</span>
            <span className="rounded-full bg-emerald-900/30 px-3 py-1 text-xs text-emerald-300">Team Leadership</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-zinc-950 p-4 md:p-8 pt-20 lg:pt-20 xl:pt-30">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block rounded-full bg-blue-900/20 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-400">Career Timeline</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Changelog from my journey
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            I&apos;ve been working at Kay.ai for the past 1.5 years.<br />
            Here&apos;s a timeline of my journey across multiple startups and projects.
          </p>
          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm text-zinc-400">Current Role</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-sm text-zinc-400">AI Startup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm text-zinc-400">Growth Startup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-sm text-zinc-400">Early Career</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={data} />

        {/* Technologies section */}
        <div className="mt-12 rounded-xl bg-zinc-900/50 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-zinc-800 p-3">
              <Code2 className="h-6 w-6 text-zinc-300" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Technologies Mastered</h3>
              <p className="text-sm text-zinc-400">Full-stack expertise across modern tech stack</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-blue-400">Frontend</div>
              <div className="mt-2 text-xs text-zinc-300">React, TypeScript, Tailwind, Next.js</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-emerald-400">Backend</div>
              <div className="mt-2 text-xs text-zinc-300">Node.js, GoLang, Rails, Python</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-purple-400">AI/ML</div>
              <div className="mt-2 text-xs text-zinc-300">OpenAI, LangChain, Vector DBs</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-amber-400">Databases</div>
              <div className="mt-2 text-xs text-zinc-300">PostgreSQL, Redis, MongoDB, TimescaleDB</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-rose-400">Cloud &amp; DevOps</div>
              <div className="mt-2 text-xs text-zinc-300">AWS, Cloudflare, Docker, CI/CD</div>
            </div>
            <div className="rounded-lg bg-zinc-800/30 p-4 text-center">
              <div className="text-sm font-semibold text-cyan-400">Tools</div>
              <div className="mt-2 text-xs text-zinc-300">Git, Figma, Vercel, Agile/Scrum</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
