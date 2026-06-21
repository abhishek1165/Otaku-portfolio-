"use client";
import React from 'react'

import {useRouter} from 'next/navigation';
import {projectStyles as s} from '@/public/dummyStyles'; 
import {projects,Project} from "@/app/lib/projects-data"
import { FollowerPointerCard } from '../components/ui/following-pointer';

const TitleComponent=({
  title,
  avatar,
}:{
  title:string;
  avatar:string;
})=>(
  <div className={s.titleComponentContainer}>
    <img src={avatar}
    height="20"
    width="20"
    alt={title}
    className={s.titleComponentAvatar}>
    </img>

  </div>
)

const ProjectsPage = () => {
  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <div className={s.header}>
          <h1 className={s.pageTitle}>
            Projects
          </h1>
            <p className={s.pageSubtitle}>
               Playground - Small MVP to Production Apps

            </p>
        </div>
           
           <div className={s.projectsGrid}>
             {projects.map((project)=>(
              <FollowerPointerCard
              key={project.slug}
              title={
                <TitleComponent
                title={project.author}
                avatar={project.authorAvatar}/>
              }>
                <ProjectCard project={project}/>
              </FollowerPointerCard>
             ))}

           </div>

      </div>

    </div>
  )
}

export default ProjectsPage