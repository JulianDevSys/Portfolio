import { useEffect, useState } from "react"
import useProjectById from "../Hooks/useProjectById"
import "./StyleModalProjects.css"
import { useNavigate } from "react-router-dom"

export default function ModalProjects({ids,close}){

    const [infoProjects, setInfoProjects]=useState([])
    const navigate= useNavigate()

    useEffect(()=>{
        useProjectById(ids,(res,err)=>{
            if(err){
                alert(err)
                close()
            }
            setInfoProjects(res)

        })
    },[])

    const redireccionar = (algo)=>{
        window.location.href=algo
    }
    
    return(
        <div className="principal_modal">

            <div className="infoModal">
                <div className="modal">
            <button className="closeModal" onClick={()=>close()}>X</button>
            <label htmlFor="title" className="label_modal">Título</label>
            <input className="input_modal" value={infoProjects.title} type="text" placeholder="title"></input>
            <label htmlFor="title" className="label_modal">Programmed</label>
            <input className="input_modal"  value={infoProjects.programmed} type="text" placeholder="title"></input>
            <label htmlFor="title" className="label_modal_description">Description</label>
            <p className="modal_description">{infoProjects.description} </p>
            <button className="redirec_project" onClick={()=>redireccionar(infoProjects.game)}  >Go To Project</button>
        
            </div>
        </div>
        
        </div>
    )
}