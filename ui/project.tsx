'use client'
import { TrashIcon, PencilSquareIcon, XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export default function ProjectComponent({id,projectName, handleDelete}:{id:number,projectName:string, handleDelete:(id:number)=>void}){
  const [editing,setEditing] = useState(false)
  const [editText,setEditText]= useState(projectName)
  const [deleting, setDeleting] = useState(false)
  return(
    <div className="flex flex-col items-start w-80 h-96 rounded-xl bg-white shadow-sm  p-4">
      <div className="flex justify-between items-center w-full">
        {
          !editing ? (
            <>
            <h1 className=" max-w-48 whitespace-nowrap overflow-hidden text-ellipsis">
              { editText}
            </h1>
            <div>
              <button className=" mr-2" onClick={(e)=>setEditing(true)}><PencilSquareIcon className=" size-6 text-green-500"/></button>
              <button onClick={(e)=>setDeleting(true)}><TrashIcon className=" size-6 text-red-500"/></button>
            </div> 
            </>
          ):(
            <>
              <input 
                className=" max-w-48 p-1 border border-gray-200 rounded-lg"
                type="text" 
                value={editText} 
                onChange={(e)=> setEditText(e.target.value)} />
              <div>
                <button className=" mr-2" onClick={(e)=>setEditing(false)}><CheckCircleIcon className=" size-6 text-green-500"/></button>
                <button onClick={(e)=>{
                  setEditText(projectName)
                  setEditing(false)}}>
                    <XCircleIcon className=" size-6 text-red-500"/>
                </button>
              </div>
            </>
          )
        }
      </div>
      <hr />
      {
        deleting && (
          <div onClick={(e)=>setDeleting(false)} className="fixed z-50 top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#dcdcdc59]">
            <div className="p-6 flex flex-col justify-between w-96 h-52 bg-white shadow-sm rounded-lg">
              <h1>Are you sure you want to delete: {editText} ?</h1>
              <div className="flex justify-end gap-2">
                <button
                  className=" p-2 bg-green-500 rounded text-white"
                  onClick={(e)=>{
                  e.stopPropagation()
                  handleDelete(id)
                  setDeleting(false)}
                }>
                  Confirm
                </button>
                <button onClick={(e)=>{
                  e.stopPropagation()
                  setDeleting(false)}} 
                  className=" p-2 bg-red-500 rounded text-white">
                    Cancel
                </button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}