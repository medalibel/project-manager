

export type Project = {
  id:number
  name:string
}

let projects:Project[] = [{
  id:1,
  name:'Test 1'
},{
  id:2,
  name:'Test 1'
},
{
  id:3,
  name:'Test 1'
}]

export function deleteProject(id:Number){
  
}
export function getProjects(){
  return projects
}

