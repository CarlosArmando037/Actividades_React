
const productos = [
    // Electrónicos
    { nombre: "iPhone 15", precio: 999, descuento: 10, categoria: "Electrónicos" },
    { nombre: "MacBook Air", precio: 1299, descuento: 15, categoria: "Electrónicos" },
    { nombre: "AirPods Pro", precio: 249, descuento: 20, categoria: "Electrónicos" },
    { nombre: "iPad Air", precio: 599, descuento: 5, categoria: "Electrónicos" },

    // Ropa
    { nombre: "Camiseta Premium", precio: 29, descuento: 25, categoria: "Ropa" },
    { nombre: "Jeans Clásicos", precio: 79, descuento: 30, categoria: "Ropa" },
    { nombre: "Chaqueta de Cuero", precio: 199, descuento: 15, categoria: "Ropa" },
    { nombre: "Zapatillas Deportivas", precio: 89, descuento: 20, categoria: "Ropa" },

    // Hogar
    { nombre: "Sofá Moderno", precio: 899, descuento: 25, categoria: "Hogar" },
    { nombre: "Mesa de Comedor", precio: 449, descuento: 10, categoria: "Hogar" },
    { nombre: "Lámpara LED", precio: 69, descuento: 15, categoria: "Hogar" },
    { nombre: "Alfombra Persa", precio: 299, descuento: 30, categoria: "Hogar" }
];

// Componente Product
const Product = ({ producto }) => {
    const { nombre, precio, descuento } = producto;
    const precioFinal = (precio * (1 - descuento / 100)).toFixed(2);

    return (
        <div>
            <h3>{nombre}</h3>
            <p><strong>Precio:</strong> {precio} dolares<br></br>
            <strong>Descuento:</strong> {descuento}%<br></br>
            <strong>Precio final:</strong> {precioFinal} dolares</p>
        </div>
    );
};

// Componente Category
const Category = ({ titulo, productos }) => {
    return (
        <section>
            <h2>{titulo}</h2>
            <div>
                {productos.map((prod, index) => (
                    <Product key={index} producto={prod} />
                ))}
            </div>
        </section>
    );
};

// Componente principal Store
const Ejercicio5_2 = () => {
    // Agrupar por categoría
    const categorias = ["Electrónicos", "Ropa", "Hogar"];

    return (
        <div>
            <h1> Tienda Online</h1>
            {categorias.map((cat) => {
                const productosFiltrados = productos.filter(p => p.categoria === cat);
                return <Category key={cat} titulo={cat} productos={productosFiltrados} />;
            })}
        </div>
    );
};

export default Ejercicio5_2