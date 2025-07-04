const Ejercicio3_2 = () => {

  const libros = [
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", paginas: 417, genero: "Realismo mágico" },
  { titulo: "1984", autor: "George Orwell", paginas: 328, genero: "Distopía" },
  { titulo: "El Quijote", autor: "Miguel de Cervantes", paginas: 863, genero: "Clásico" },
  { titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 249, genero: "Distopía" },
  { titulo: "Pedro Páramo", autor: "Juan Rulfo", paginas: 124, genero: "Realismo mágico" },
  { titulo: "Dune", autor: "Frank Herbert", paginas: 688, genero: "Ciencia ficción" }
  ];

  // 1. Mostrar los libros sin errores
  const renderLibros = libros.map((libro, index) => (
    <div key={index}>
      <h3>{libro.titulo}</h3>
      <p><strong>Autor:</strong> {libro.autor}<br></br>
      <strong>Páginas:</strong> {libro.paginas}<br></br>
      <strong>Género:</strong> {libro.genero}</p>
    </div>
  ));

  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0);
  const promedioPaginas = Math.round(totalPaginas / libros.length);

  // 3. Contar géneros
  const conteoGeneros = {};
  libros.forEach(libro => {
    conteoGeneros[libro.genero] = (conteoGeneros[libro.genero] || 0) + 1;
  });

  // 4. Encontrar el género más común
  const generoMasComun = Object.keys(conteoGeneros).reduce((a, b) =>
    conteoGeneros[a] > conteoGeneros[b] ? a : b
  );

  // 5. Sugerencias según el género más común
  const recomendaciones = libros
    .filter(libro => libro.genero === generoMasComun)
    .map((libro, index) => (
      <li key={index}>{libro.titulo} - {libro.autor}</li>
    ));
  return (
    <div >
      <h2>📊libros</h2>
      {renderLibros}
      <p><strong>Total de páginas:</strong> {totalPaginas}<br></br>
      <strong>Promedio de páginas:</strong> {promedioPaginas}<br></br>
      <strong>Género más común:</strong> {generoMasComun}</p>

      <h2>Recomendaciones "{generoMasComun}"</h2>
      <ul>{recomendaciones}</ul>
    </div>
  )
}
  
export default Ejercicio3_2