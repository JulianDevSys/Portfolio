
import { useState } from "react"
import "./StyleMyProyects.css"
import { useEffect } from "react"

export default function MyProyects(){

    const [Proyectos, setProyectos]= useState([])




        useEffect(()=>{
            const urlProyectos= ["https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg"
                ]
            setProyectos( urlProyectos)

        },[])
        

    return(
        <div className="container_projects">

            <div className="projects">
            <h1> Proyectos</h1>

            <div className="my_projects">
                
                {Proyectos.map((element, index)=>{
                    return(
                    <div>
                    <img className="image_projects" key={index} src={element} alt="imagenes"  />
                    <button></button>
                    </div>
                )
                
                })}
            <div className="description">
                
            </div>

            </div>

            </div>

        </div>
    )
}