const Ejercicio2_2 =()=>{
    const NavBar = () => {
    return (
        <nav>
        <ul>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
        </nav>
    );
    };

    const ProjectCard = () => {
    const proyectos = [
        { nombre: "E-commerce App", tecnologia: "React + Node.js", descripcion: "Tienda online completa" },
        { nombre: "Dashboard Analytics", tecnologia: "React + D3.js", descripcion: "Panel de métricas" },
        { nombre: "Chat en Tiempo Real", tecnologia: "React + Socket.io", descripcion: "Aplicación de chat" }
    ];

    return (
        <div id="proyectos">
        <h2>Proyectos</h2>
            {proyectos.map((proyecto, index) => (
            <div key={index}>
                <h3>{proyecto.nombre}</h3>
                <p>Tecnología: {proyecto.tecnologia}<br></br>
                {proyecto.descripcion}</p>
            </div>
            ))}
        </div>
    );
    };

    const SkillBadge = () => {
    const habilidades = ["JavaScript", "React", "Node.js", "CSS", "Git", "MongoDB", "Express"];
    return (
        <section id="habilidades">
        <h2>Habilidades</h2>
        <div>
            {habilidades.map((skill, index) => (
            <div key={index}>
                {skill}
            </div>
            ))}
        </div>
        </section>
    );
    };

    const SocialLinks = () => {
    const redesSociales = [
        { nombre: "GitHub", url: "https://github.com/" },
        { nombre: "LinkedIn", url: "https://linkedin.com/" },
        { nombre: "Twitter", url: "https://twitter.com/" }
    ];
    return (
        <section id="contacto">
        <h2>Redes Sociales</h2>
        <ul>
            {redesSociales.map((red, index) => (
            <li key={index}>
                <a href={red.url} target="_blank" rel="noopener noreferrer">{red.nombre}</a>
            </li>
            ))}
        </ul>
        </section>
    );
    };    
    return(
        <div>
            <NavBar/>
            <ProjectCard/>
            <SkillBadge/>
            <SocialLinks/>
        </div>
    )
}

export default Ejercicio2_2