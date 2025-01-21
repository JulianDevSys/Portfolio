import "./StyleHeader.css"
import { useNavigate } from 'react-router-dom';
export default function Header() {


    const click = () => {
        const redirect = document.getElementById("principal_profile")
        redirect.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className="header">
            <div className="name"><p className="nombre">Julian</p><p> Castro</p></div>

            <div className="options">
                <p className="opciones">Home</p>
                <p className="opciones" onClick={() => click()}>About</p>
                <p className="opciones">Contact</p>
            </div>
        </div>
    )
}