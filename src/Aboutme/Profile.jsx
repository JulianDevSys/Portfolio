import "./StyleProfile.css"

export default function Profile() {
    return (
        <div id="principal_profile">

            <div className="my_profile">
                <h1>About Me</h1>
                <p>I am an eighth-semester Systems Engineering student, focusing on software development.
                    I have experience in programming languages such as JavaScript, Python, HTML, and CSS, and I am proficient in libraries like React.
                    Additionally, I am familiar with Node.js and Express.
                    I stand out for being proactive, results-oriented,
                    and capable of working on real-world projects while continuously learning and growing in the technology field.</p>
            </div>
            <div className="images">
                <div className="img">
                    <img className="image" src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" alt="js_imagen" />
                    <img className="image" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hd-Hz0vOuWyFXYO3xUrG4_bJQ0wcmd-DtA&s" alt="NOlde_js_imagen" />


                </div>
                <div className="proactive">
                    <img className="imagenes" src=" https://balcon40.com/wp-content/uploads/2018/04/proactividad.jpg?w=259" alt="NOlde_js_imagen" /></div>

            </div>
        </div>
    )
}