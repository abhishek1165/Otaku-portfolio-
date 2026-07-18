"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { homePageStyles, spotlightStyles } from "@/public/dummyStyles";
import { Spotlight } from "../app/components/ui/Spotlight";
import { Cover } from "./components/ui/cover";
import { PointerHighlight } from "./components/ui/pointer-highlight";

const HomePage = (): React.ReactElement => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, [videoRef]);

  return (
    <>
      <div className={homePageStyles.container}>
        <div
          className={cn(
            homePageStyles.backgroundGrid.wrapper,
            homePageStyles.backgroundGrid.pattern,
          )}
        />
        <Spotlight className={spotlightStyles.position} fill="#00FF50" />
        <div className={homePageStyles.gradientOverlay} />
        <section className={homePageStyles.heroSection}>
          <div className="relative">
            <h1 className={homePageStyles.h1}>
              Hey, I&apos;m{" "}
              <span className={homePageStyles.spanWithMargin}>
                <Cover>Abhishek</Cover>
              </span>
            </h1>
            <h2 className={homePageStyles.h2}>
              Full-Stack Developer{" "}
              <span className={homePageStyles.spanInline}>
                <PointerHighlight>| DevOps Enthusiast</PointerHighlight>
              </span>
            </h2>

            <div className="mb-6">
              <div className={homePageStyles.calloutCard.wrapper}>
                <div className={homePageStyles.calloutCard.innerContainer}>
                  <div className={homePageStyles.calloutCard.textContainer}>
                    {/* Document / download icon */}
                    <svg
                      className={homePageStyles.calloutCard.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                      />
                    </svg>
                    <div className={homePageStyles.calloutCard.text}>
                      Get my resume
                    </div>
                  </div>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={homePageStyles.calloutCard.button}
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </div>
            <p className={homePageStyles.paragraph}>
              I&apos;m a final-year Computer Science student who builds
              full-stack products with the MERN stack, and lately I&apos;ve
              been going deep on DevOps — containers, CI/CD pipelines, and
              cloud fundamentals. I&apos;m IBM-certified in Applied DevOps
              Engineering (Docker, Kubernetes, Jenkins, CI/CD), and I care more
              about shipping something that works end-to-end than polishing a
              demo. Currently looking for SDE-1 and DevOps internship roles,
              open to relocating to Bangalore.
            </p>
            <article className={homePageStyles.article.wrapper}>
              <div className={homePageStyles.article.videoContainer}>
                <video
                  ref={videoRef}
                  className={homePageStyles.article.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                  style={homePageStyles.article.videoStyles}
                >
                  <source src="/homevideo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className={homePageStyles.article.content}>
                <div className={homePageStyles.article.header}>
                  <svg
                    className={homePageStyles.article.headerIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>

                  <span>Featured Work</span>
                </div>
                <h3 className={homePageStyles.article.title}>
                  My AI Journey: From Idea to Product in 30 Days
                </h3>
                <p className={homePageStyles.article.description}>
                  A 30-day journey of building an AI-powered product, sharing
                  insights, challenges, and triumphs along the way. From concept
                  to launch, discover the highs and lows of creating with AI.
                </p>
                <div className={homePageStyles.article.linkContainer}>
                  <Link
                    href="/projects"
                    className={homePageStyles.article.link}
                  >
                    <span>View My Projects</span>
                    <svg
                      className={homePageStyles.article.linkIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
