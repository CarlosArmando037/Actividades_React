const Ejercicio2_1 = () => {

    const Header=()=>{
  return(
    <div>
      <h1>Carlos Armando Ramirez Salas Programador FrontEnd</h1>
    
    </div>
  )
}
const About=()=>{
  return(
    <div>
      <p>
        tengo 23 años, vivo en Cd.Obregon y los pasatiempos que tengop son dibujar,
        programar juegos y jugar.
      </p>
    
    </div>
  )
}
const Contact=()=>{
  return(
    <div>
      <p>
        mi git es <a href="https://github.com/carlosarmandoramirez">https://github.com/carlosarmandoramirez</a><br></br>
        mi gmail es <a >carlosramirezsalas400@gmail.com</a>
      </p>
    </div>
  )
}
const Footer=()=>{
  const fecha_actual = new Date()
  return(
    <div>
      <p>
        Hoy es: {fecha_actual.getFullYear()}
      </p>
    </div>
  )
}
return(
    <div>
        <Header/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
)
}

export default Ejercicio2_1 
