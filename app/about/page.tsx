import { aboutPageStyles } from '@/public/dummyStyles';
import React from 'react'
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';
import Link from 'next/link';

const AboutPage = () => {

   const interests = [
    "FULL-STACK DEV",
    "DEVOPS",
    "MERN STACK",
    "MANHWA",
    "ANIME",
    "YOUTUBE",
    "BANGALORE BOUND",
  ];

  const techStack = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Next.js",
    "Docker",
    "CI/CD",
    "Python",
    "Kubernetes",
  ];

  const email = "abhishekkachha12345@gmail.com";
 
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;


  return (
    <div className={aboutPageStyles.pageContainer}>
      <div className={aboutPageStyles.contentContainer}>
        <div className={aboutPageStyles.backgroundContainer}>
          <div className={aboutPageStyles.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>
          <div className={aboutPageStyles.contentWrapper}>
            <h1 className={aboutPageStyles.mainHeading}>
              Abhishek Kachhap
            </h1>
            <div className={aboutPageStyles.interestsContainer}>
                {interests.map((interest, index) => (
                  <span key={index} className={aboutPageStyles.interestItem}>
                    {interest}
                    {index < interests.length -1 &&(
                      <span className={aboutPageStyles.interestSeparator}>|</span>
                    )}
                  </span>
                ))}
            </div>

            <div className={aboutPageStyles.techStackContainer}>
                {techStack.map((tech) => (
                  <span key={tech} className={aboutPageStyles.techPill}>
                    {tech}    
                  </span>
                ))}    

            </div>
           
           {/* {Content Section } */}

           <div className={aboutPageStyles.sectionsContainer}>
            
    {/* Who I Am */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Who I Am</h2>
                <p className={aboutPageStyles.paragraph}>
                  Hey, I&apos;m Abhishek — a final-year CS student, currently
                  looking to relocate to Bangalore. I&apos;ve spent the last
                  while building full-stack products with the MERN stack, and
                  lately I&apos;ve been going deep on DevOps — containers,
                  CI/CD, the deployment side of things.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>What I Do</h2>
                <p className={aboutPageStyles.paragraph}>
                  I care about building things that work end-to-end, not just a
                  UI — the pipeline that ships it and keeps it running matters
                  just as much to me as the code itself. Less demo energy, more
                  things that actually hold up in production.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>My Journey</h2>
                <p className={aboutPageStyles.paragraph}>
                  Built the Feedback Intelligence System — an NLP pipeline
                  turning raw feedback into structured insight (Python,
                  MongoDB). Currently building an AI-powered CSV importer for
                  GrowEasy that uses an LLM to map CRM data to the right schema
                  automatically. Along the way, picked up an IBM certification
                  in DevOps — CI/CD, Docker, Kubernetes, Jenkins.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Vision</h2>
                <p className={aboutPageStyles.paragraph}>
                  AI is collapsing the gap between idea and shipped product —
                  what used to take a team now takes one person who knows the
                  full stack end-to-end. I want to be that person: the one who
                  can write the feature, containerise it, set up the pipeline,
                  and keep it running without needing four hand-offs.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={aboutPageStyles.sectionHeading}>Beyond Code</h2>
                <p className={aboutPageStyles.paragraph}>
                  Big manhwa and webtoon reader — if you want a rec, ask.
                  Currently building a YouTube channel that recaps anime and
                  manhwa arcs for people who don&apos;t have time to read 400
                  chapters. Outside of that: probably watching something,
                  or trying to convince myself to go outside.
                </p>
              </section>

           </div>

           <div className={aboutPageStyles.ctaContainer}> 
             <Link 
                href="/contact"
                className={aboutPageStyles.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={aboutPageStyles.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
              >
                <svg
                  className={aboutPageStyles.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>

           </div>
             

          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage