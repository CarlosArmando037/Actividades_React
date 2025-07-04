const Ejercicio4_2=()=>{
        // Datos del restaurante
        const nombreRestaurante = "La Cocina de María";
        const descripcionRestaurante = "Cocina tradicional española con toque moderno";
        const direccion = "Calle Mayor 123, Madrid";
        const telefono = "+34 91 123 4567";

        // Datos del menú
        const entrantes = [
        { nombre: "Jamón Ibérico", descripcion: "Jamón de bellota cortado a mano", precio: 18, ingredientes: "Jamón ibérico, pan tostado, tomate" },
        { nombre: "Croquetas de Jamón", descripcion: "Croquetas caseras cremosas", precio: 12, ingredientes: "Jamón serrano, bechamel, pan rallado" },
        { nombre: "Gazpacho Andaluz", descripcion: "Sopa fría de verduras", precio: 8, ingredientes: "Tomate, pepino, pimiento, ajo, aceite" },
        { nombre: "Patatas Bravas", descripcion: "Patatas fritas con salsa picante", precio: 9, ingredientes: "Patatas, salsa brava, alioli" }
        ];

        const principales = [
        { nombre: "Paella Valenciana", descripcion: "Paella tradicional con pollo y verduras", precio: 22, ingredientes: "Arroz, pollo, judías, pimiento" },
        { nombre: "Cordero Asado", descripcion: "Cordero al horno con hierbas", precio: 28, ingredientes: "Cordero, romero, ajo, patatas" },
        { nombre: "Merluza a la Plancha", descripcion: "Pescado fresco con verduras", precio: 24, ingredientes: "Merluza, espárragos, limón" },
        { nombre: "Cocido Madrileño", descripcion: "Plato tradicional de garbanzos", precio: 19, ingredientes: "Garbanzos, chorizo, morcilla, verduras" }
        ];

        const postres = [
        { nombre: "Flan Casero", descripcion: "Flan tradicional con caramelo", precio: 6, ingredientes: "Huevos, leche, azúcar, vainilla" },
        { nombre: "Tarta de Santiago", descripcion: "Tarta de almendra gallega", precio: 7, ingredientes: "Almendras, huevos, azúcar, limón" },
        { nombre: "Crema Catalana", descripcion: "Crema quemada con canela", precio: 6, ingredientes: "Nata, yemas, azúcar, canela" },
        { nombre: "Torrijas", descripcion: "Pan frito con miel y canela", precio: 5, ingredientes: "Pan, leche, huevo, miel, canela" }
        ];

        // Componente para mostrar la info del restaurante
        const RestaurantInfo = () => (
        <header>
            <h1>{nombreRestaurante}</h1>
            <p>{descripcionRestaurante}<br></br>
            {direccion} | {telefono}</p>
        </header>
        );

        // Componente para un platillo individual
        const MenuItem = ({ nombre, descripcion, precio, ingredientes }) => (
        <div>
            <h3>{nombre} <span>{precio}</span></h3>
            <p>{descripcion}<br></br>
            <strong>Ingredientes:</strong> {ingredientes}</p>
        </div>
        );

        // Componente para una sección del menú
        const MenuSection = ({ titulo, items }) => (
        <section>
            <h2>{titulo}</h2>
            {items.map((item, index) => (
            <MenuItem key={index} {...item} />
            ))}
        </section>
        );

    return(
        <div>
        <RestaurantInfo />
        <MenuSection titulo="Entrantes" items={entrantes} />
        <MenuSection titulo="Platos Principales" items={principales} />
        <MenuSection titulo="Postres" items={postres} />
        </div>        
    )
}


export default Ejercicio4_2;
