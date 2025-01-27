import "./StyleContactme.css"


export default function Contactme(){
    return(
        <div id="container_contact">
            
            <div className="title">
                    <h1> Contact</h1>
                </div>

                <div className="contend">

                
                
            <div className="my_contact">
                <h1>Julian Castro</h1>
                <label htmlFor="title" className="label_modal">Email</label>
                <input className= "input_contact" value="jucastrohenao@gmail.com"type="email"></input>
                <label htmlFor="title" className="label_modal">Number</label>
                <input  className= "input_contact" value= "3028121522" type= "text"></input>
                <label htmlFor="title" className="label_modal">Description</label>
                <p className="modal_description">{"I am always looking for new opportunities to grow professionally and add value to innovative projects. If you represent a company or are interested in my skills, do not hesitate to contact me. I am available for collaborations, interviews or any questions related to my work. I hope to talk to you soon!"} </p>
           
        </div>

            <div className="imagens_show">
                <img className="img_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTp-7babLQisN9fnM_yIBCm3d9oKBOWR8wUg&s" alt="imagen" />
                <img className="img_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DvjWilfdE2yNicxTFkDy9lYTo20UuPp1-Q&s" alt="imagen" />
                <img className="img_1" src="https://img.freepik.com/foto-gratis/collage-fondo-programacion_23-2149901789.jpg" alt="imagen" />
                <img className="img_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczi-fI3I9TCSfGqhuJVK15EIYd3rA-N04dw&s" alt="imagen" />
                <img className="img_1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DvjWilfdE2yNicxTFkDy9lYTo20UuPp1-Q&s" alt="imagen" />

            </div>


            </div>

        </div>
    )
}