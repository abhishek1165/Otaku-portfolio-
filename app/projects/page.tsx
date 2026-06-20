"use client";
import React from 'react'

import {useRouter} from 'next/navigation';
import {projectStyles as s} from '@/public/dummyStyles'; 
import {projects,Project} from "@/app/lib/projects-data"

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

      </div>

    </div>
  )
}

export default ProjectsPage