
import { useState } from "react"
import "./StyleMyProyects.css"
import { useEffect } from "react"

export default function MyProyects(){

    const [Proyectos, setProyectos]= useState([])




        useEffect(()=>{
            const urlProyectos= ["https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                "https://img.freepik.com/vector-gratis/ilustracion-planta-frailejon-diseno-plano_23-2150043617.jpg",
                ]
            setProyectos( urlProyectos)

        },[])
        

    return(
        <div className="container_projects">

            <div className="projects">

            <div className="title">
            <h1> Projects</h1> </div>

            <div className="my_projects">
                
                {Proyectos.map((element, index)=>{
                    return(
                    <div className="get_proyects">
                    <img className="image_projects" key={index} src={element} alt="imagenes"  />

                    <div className="button">
                    <button className="information_projects">Information</button> 
                    </div>

                </div>
                )
                
                })}

            </div>

            </div>
            

        </div>
    )
}