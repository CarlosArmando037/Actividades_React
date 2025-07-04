const Ejercicio3_1 = () => {
  const peliculas = [
  { titulo: "El Padrino", año: 1972 },
  { titulo: "Pulp Fiction", año: 1994 },
  { titulo: "El Señor de los Anillos", año: 2001 },
  { titulo: "Matrix", año: 1999 },
  { titulo: "Inception", año: 2010 }]

  const promedio = Math.round(peliculas.reduce((acumulador, peliculas)=> acumulador + peliculas.año,0)/5)
  return (
    <section id="peliculas">
      <h2>Peliculas</h2>
      <div>
        {peliculas.map((peliculas, index) => (
          <div key={index}>
            <p><strong>{peliculas.titulo}</strong><br></br>
              Estreno: {peliculas.año}
            </p>
          </div>
        ))}
      </div>
      <p> promedio de estrenos: {promedio}</p>

    </section>
  )
}

export default Ejercicio3_1