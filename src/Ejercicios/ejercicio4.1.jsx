const Ejercicio4_1=()=>{
    const fotos = [
    { titulo: "Amanecer en la Montaña", descripcion: "Primera luz del día iluminando los picos nevados", ubicacion: "Alpes Suizos" },
    { titulo: "Reflexiones Urbanas", descripcion: "Rascacielos reflejados en charcos después de la lluvia", ubicacion: "Nueva York" },
    { titulo: "Vida Marina", descripcion: "Coloridos peces tropicales en arrecife de coral", ubicacion: "Gran Barrera de Coral" },
    { titulo: "Bosque Encantado", descripcion: "Rayos de sol filtrándose entre árboles centenarios", ubicacion: "Selva Negra, Alemania" },
    { titulo: "Desierto Infinito", descripcion: "Dunas doradas extendiéndose hasta el horizonte", ubicacion: "Sahara, Marruecos" },
    { titulo: "Aurora Boreal", descripcion: "Luces verdes danzando en el cielo nocturno", ubicacion: "Islandia" }
    ];

    const tituloGaleria = "Momentos Capturados";
    const subtituloGaleria = "Galería de fotografía profesional";

    const GalleryHeader = ({ titulo, subtitulo }) => (
    <header>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
    </header>
    );
    const PhotoCard = ({ titulo, descripcion, ubicacion }) => (
    <div>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p><strong>Ubicación:</strong> {ubicacion}</p>
    </div>
    );
    const Gallery = () => {
    return (
        <div>
        <GalleryHeader titulo={tituloGaleria} subtitulo={subtituloGaleria} />

        <div>
            {fotos.map((foto, index) => (
            <PhotoCard
                key={index}
                titulo={foto.titulo}
                descripcion={foto.descripcion}
                ubicacion={foto.ubicacion}
            />
            ))}
        </div>
        </div>
    );
    };
    return(
        <div>
            <GalleryHeader/>
            <Gallery/>
            <PhotoCard/>
        </div>
    )
}

export default Ejercicio4_1