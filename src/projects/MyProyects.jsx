
import { useState } from "react"
import "./StyleMyProyects.css"
import { useEffect } from "react"
import getProjects from "../Hooks/getProjects"
import ModalProjects from "./ModalProjects"
import Hanged from "../image/CapturaHanged.PNG"
import Movies from "../image/CapturaMovies.PNG"


export default function MyProyects() {

    const [Proyectos, setProyectos] = useState([])
    const [modal, setModal]= useState([])


const arreglo=[Hanged,Movies]
    useEffect(() => {

        getProjects((res) => {
            setProyectos(res)
        })
    }, [])


    return (
        <div id="container_projects">

            <div className="projects">

                <div className="title">
                    <h1> My projects</h1> </div>
                    {modal}

                <div className="my_projects">

                    

                    {Proyectos.map((element,index) => {
                        return (
                            <div className="get_proyects">
                                <img className="image_projects" key={element.id} src={arreglo[index]} alt="imagenes" />
                                <div className="button">
                                    
                                    <button className="information_projects" onClick={()=> setModal(<ModalProjects  ids={element.id}  close={()=> setModal([])}/> )}>Information</button>
                                </div>

                            </div>
                        )

                    })}

                </div>

            </div>


        </div>
    )
}