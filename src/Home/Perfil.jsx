import { FaGithub, FaInstagram } from 'react-icons/fa'
import Header from './Header'
import "./StylePerfil.css"
import 'animate.css';
import Profile from '../Aboutme/Profile';
import MyProyects from '../projects/MyProyects';


export default function Perfil() {


    return (
        <div className="principal_container">
            <div className='Header'>
                <Header />
            </div>

            <div className='informatioAndimage'>
                <div className="my_information">
                    <h3 className="animate__animated animate__bounce">Hellow, I'm</h3>
                    <h1>Julian Castro Henao</h1>
                    <h3>And I'am a Front-End</h3>
                    <p className='about_me'>Passionate about web development. I love learning</p>

                    <div className="social-links">
                        <a href="https://github.com/JulianDevSys" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                        <a href="https://www.instagram.com/jucastrohenao" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                    </div>
                </div>

                <div className='imgaen'>

                    <img className="image_user" src="https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg" alt="imagen" />
                </div>

            </div>


            <div className='Profile'>
                < Profile />
            </div>

            <div className='MyProjects'>
                <MyProyects/>
            </div>
            
        </div>

    )
}