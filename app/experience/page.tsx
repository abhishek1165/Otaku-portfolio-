"use client";
import React from "react";
import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";
import { timelineStyles as s } from "@/public/dummyStyles";
import { Timeline } from "../components/ui/timeline";
const TimelineDemo = () => {
  const data = [
    {
      title: "2026 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainer}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Software Engineer| DevOOps Engineer
              </h3>
              <p className={s.contentTitle}>
                Building and maintaining scalable software solutions.
              </p>
              <p className={s.contentSubtitle}>Series A Startup- Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Tailwind</span>
          </div>
        </div>
      ),
    },
    {
      title: "2026 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainer}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Software Engineer| DevOOps Engineer
              </h3>
              <p className={s.contentTitle}>
                Building and maintaining scalable software solutions.
              </p>
              <p className={s.contentSubtitle}>Series A Startup- Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Tailwind</span>
          </div>
        </div>
      ),
    },
    {
      title: "2026 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainer}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Software Engineer| DevOOps Engineer
              </h3>
              <p className={s.contentTitle}>
                Building and maintaining scalable software solutions.
              </p>
              <p className={s.contentSubtitle}>Series A Startup- Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}>
                Leading UI/UX for Copilot to automate insurance workflow
              </span>
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Node.js</span>
            <span className={s.techBadge}>Tailwind</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className="mb-0">
          <div className={s.timelineBadge}>
            <span className={s.timelineBadge}> Carrer TimeLine</span>
          </div>
          <h1 className={s.mainTitle}> Changelog from my Career</h1>
          <p className={s.mainParagraph}>
            Here&apps;ve been working on some amazing projects and have gained
            valuable experience along the way.
            <br />
            Here&apps;s a timeline of my career journey, highlighting some of
            the key milestones and achievements.
          </p>
          <div className={s.legendContainer}>
            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}> </div>
              <span className={s.legendText}>Software Engineer</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}> </div>
              <span className={s.legendText}>Software Engineer</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}> </div>
              <span className={s.legendText}>Software Engineer</span>
            </div>

            <div className={s.legendItem}>
              <div className={`${s.legendDot} bg-blue-500`}> </div>
              <span className={s.legendText}>Software Engineer</span>
            </div>
          </div>
        </div>
        <Timeline data={data} />
        <div className={s.techSectionContainer}>
          <div className={s.techSectionHeader}>
            <div className={s.techSectionIconContainer}>
              <Code2 className={s.techSectionIcon} />
            </div>
            <div>
              <h3 className={s.techSectionTitle}>TechNologies Mastered</h3>
              <p className={s.techSectionSubtitle}>
                Full-Stack expertise acroos various tech stacks
              </p>
            </div>
          </div>

          <div className={s.techGrid}>
            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Frontend
                <div className={s.techCardContent}>
                  React , Next.js , Tailwind,TypeScript, Framer Motion.
                </div>
              </div>
            </div>

            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Frontend
                <div className={s.techCardContent}>
                  React , Next.js , Tailwind,TypeScript, Framer Motion.
                </div>
              </div>
            </div>

            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Frontend
                <div className={s.techCardContent}>
                  React , Next.js , Tailwind,TypeScript, Framer Motion.
                </div>
              </div>
            </div>

            <div className={s.techCard}>
              <div className={`${s.techCardTitle} ${s.textBlue}`}>
                Frontend
                <div className={s.techCardContent}>
                  React , Next.js , Tailwind,TypeScript, Framer Motion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineDemo;
