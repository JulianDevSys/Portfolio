import { useEffect, useState } from "react"
import useProjectById from "../Hooks/useProjectById"

export default function ModalProjects({ids}){

    const [infoProjects, setInfoProjects]=useState([])

    useEffect(()=>{
        useProjectById(ids,(res,err)=>{
            if(err){
                alert(err)
            }
            setInfoProjects(res)

        })
    })
    
    return(
        <div >
            <div>

            <button>X</button>
            <input value={infoProjects.title} type="text" placeholder="title"></input>
            <input value={infoProjects.programmed} type="text" placeholder="title"></input>
            <input value={infoProjects.description} type="text" placeholder="title"></input>
            <button>go to project</button>
        </div>
        
        </div>
    )
}