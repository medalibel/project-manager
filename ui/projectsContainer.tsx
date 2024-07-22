'use client'
import { Project } from "@lib/data/data"
import ProjectComponent from "@ui/project"
import { useState } from "react"

export default function ProjectsContainer({projects}:{projects:Project[]}){
  const [listProjects,setListProjects] = useState(projects)
  function deleteProject(id:number){
    let n = listProjects.filter((p)=>p.id!==id)
    setListProjects(n)
  }
  function updateProject(id:number,title:string){
    
  }
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          listProjects.map((p)=>{
            return (<ProjectComponent key={p.id} id={p.id} projectName={p.name} handleDelete={deleteProject} />)
          })
        }
    </div>
  )
}