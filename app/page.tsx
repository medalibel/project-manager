import ProjectsContainer from "@ui/projectsContainer";
import { Project } from "@lib/data/data";
let projects:Project[] = [{
  id:1,
  name:'Test 1'
},{
  id:2,
  name:'Test 2'
},
{
  id:3,
  name:'Test 3'
}]

export default function Home() {
  return (
    <ProjectsContainer projects={projects}/>
  );
}
