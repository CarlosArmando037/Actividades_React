const Ejercicio1_2 = () => {
  //------------------------------------------------actividad 1.2
  const fechaNacimiento = new Date(2001, 10, 2)
  const añosExperiencia = 3
  const cafesPorDia = 2
  const horasSueñoPorDia = 5
  const librosLeidosAño = 1
  const horasEjercicioPorSemana = 1

  // Fecha actual
  const hoy = new Date()

  // Cálculo de edad
  const edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  const mes = hoy.getMonth()
  const dia = hoy.getDate()
  const cumpleEsteAño = new Date(hoy.getFullYear(), fechaNacimiento.getMonth, fechaNacimiento.getDay) // mismo mes y día
  const edadFinal = (hoy < cumpleEsteAño) ? edad - 1 : edad

  // Tiempo total vivido en días
  const milisegundosVividos = hoy - fechaNacimiento
  const diasVividos = Math.floor(milisegundosVividos / (1000 * 60 * 60 * 24))

  // Cálculos
  const totalCafes = diasVividos * cafesPorDia
  const totalHorasSueño = diasVividos * horasSueñoPorDia
  const totalLibros = edadFinal * librosLeidosAño
  const totalHorasEjercicio = Math.floor((diasVividos / 7) * horasEjercicioPorSemana)

  return (
    <div>
      <p>
      Calculadora Personal <br></br>
      edad: {edadFinal} años<br></br>
      días vividos: {diasVividos.toLocaleString()}<br></br>
      cafés tomados (aprox): {totalCafes.toLocaleString()}<br></br>
      horas dormidas (aprox): {totalHorasSueño.toLocaleString()} h<br></br>
      libros leídos estimados: {totalLibros.toLocaleString()}<br></br>
      horas de ejercicio: {totalHorasEjercicio.toLocaleString()} h<br></br>
      años de experiencia profesional: {añosExperiencia}
      </p>
    </div>
  )
}

export default Ejercicio1_2