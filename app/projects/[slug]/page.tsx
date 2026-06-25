import Link from "next/link";
import { notFound } from "next/navigation";
import { projectDetailStyles as s } from "@/public/dummyStyles";
import { getProjectBySlug, getAllProjectSlugs } from "@/app/lib/projects-data";
import {
  ArrowLeft,
  ExternalLink,
  GitHub,
  Youtube,
  Package,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <Link href="/projects" className={s.backButton}>
          <ArrowLeft className={s.backIcon} />
          Back
        </Link>

        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>

                <span
                  className={`${s.statusBadge} ${
                    project.status === "active"
                      ? s.statusActive
                      : s.statusInactive
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className={s.projectDescription}>
                {project.description}
              </p>
                 <div className={s.tagsContainer}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={s.tag}>
                        {tag}
                      </span>
                    ))}
                 </div>
            </div>
               
               <div className = { s.actionButtonsContainer}>
                {project.links.visit &&(
                    <Link
                     href={project.links.visit}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={s.visitButton}>
                        <ExternalLink className={s.backButton}/>
                        Visit Live
                    </Link>
                )} 
                  
                  {project.links.howIBuilt&&(
                    <Link
                     href={project.links.howIBuilt}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={s.visitButton}>
                        <Youtube className={s.backButton}/>
                        How I Built It
                        </Link>
                  )}
               </div>
              
          </div>
        </div>
             <div className={s.imageContainer}>
                <img
                src={project.image}
                alt={project.title}
                className={s.projectImage}>
                    
                </img>

             </div>

              <div className={s.gridContainer}>
                <div className={s.mainContent}>
                    <section>
                        <h2 className={s.sectionTitle}>
                            Project Details

                        </h2 >
                        <div className={s.prose}>
                          <p className={s.proseText}>
                            {project.detailedDescription}
                          </p>

                        </div>
                    </section>

                    <section>
                      <h2 className={s.sectionTitle}>
                            Learing Outcomes

                        </h2 >
                        <div className={s.learningOutcomesGrid }>
                          {project.learningOutcomes.map((outcome,index)=>(
                            <div key={index} className={s.learningOutcomeCard}>
                              <div className={s.learningOutcomeNumber}>
                                  <span className={s.learningOutcomeNumberText}>
                                     {index+1}
                                  </span>
                                 </div>
                                  
                                  <span className={s.learningOutcomeText}>
                                    {outcome}

                                  </span>

                            </div>

                          ))}

                        </div>
                    </section>

                </div>
                 
                  <div className={s.sidebar} >
                    <section>
                      <h3 className={s.sidebarSectionTitle}>
                        Tech Stack

                      </h3>
                      <div className ={s.techStackContainer}>
                        {project.techStack.map((tech) => (
                          <span key={tech} className={s.techStackItem}>
                            {tech}

                          </span>
                        ))}

                      </div>

                    </section>
                    <section>
                       < h3  className={s.sidebarSectionTitle}>
                       Project Link

                       </h3>
                       <div className={s.linksContainer}>
                        {
                          project.links.github &&(
                            <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={s.linkCard}
                            >
                              <GitHub className={s.linkIcon}/>
                              <span className={s.linkText}>View Source</span>

                            </a>
                          )
                        }

                       </div>
                    </section>
                    
                  </div>

              </div>

      </div>
    </div>
  );
}
