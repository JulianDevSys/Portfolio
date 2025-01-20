import "./StyleHeader.css"
import { useNavigate } from 'react-router-dom';
export default function Header(){
    const navigate= useNavigate()
    return(
        <div className="header">
            <div className="name"><p className="nombre">Julian</p><p> Castro</p></div>

            <div className="options">
            <p className="opciones">Home</p>
            <p className="opciones" onClick={()=>navigate("Aboutme")}>About</p>
            <p className="opciones">Contact</p> 
            </div>
        </div>
    )
}