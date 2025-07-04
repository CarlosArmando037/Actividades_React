
const Ejercicio1 = () =>{
      //----------------------------------------------actividad 1.1
      const nombre = "Carlos Armando Ramirez Salas"
      const edad = 23
      const ciudad = "Obregon"
      const profesion = "Desarrollador Frontend"
      const pasatiempos = ["jugar ", "programar ", "dibujar "]
      const colorFavorito = "celeste"
      const fecha = new Date()  
  return(
    <div>
        mi nombre es {nombre}<br></br>
        tengo {edad} años<br></br>
        vivo en {ciudad}<br></br>
        trabajo como {profesion}<br></br>
        mis hobbies son {pasatiempos[0]}, {pasatiempos[1]} y {pasatiempos[2]}<br></br>
        mi color favorito es el {colorFavorito}<br></br>
        hoy es {fecha.toLocaleDateString()}<br></br>
        con la hora de {fecha.toLocaleTimeString()}<br></br>
    </div>
  )
}

export default Ejercicio1