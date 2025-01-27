import "./StyleHeader.css"
export default function Header() {


    const redirectAboutMe = () => {
        const redirect = document.getElementById("principal_profile")
        redirect.scrollIntoView({ behavior: "smooth" })
    }

    const redirectProjects = () => {
        const redirects = document.getElementById("container_projects")
        redirects.scrollIntoView({ behavior: "smooth" })    
    }
    const redirectContact = () => {
        const redirects = document.getElementById("container_contact")
        redirects.scrollIntoView({ behavior: "smooth" })    
    }


    return (
        <div className="header">
            <div className="name"><p className="nombre">Julian</p><p> Castro</p></div>

            <div className="options">
                <p className="opciones" onClick={() => redirectAboutMe()}>About</p>
                <p className="opciones" onClick={() => redirectProjects()}>Projects</p>
                <p className="opciones" onClick={() => redirectContact()}>Contact</p>
            </div>
        </div>
    )
}