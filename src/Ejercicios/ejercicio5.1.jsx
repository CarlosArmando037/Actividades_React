
const Ejercicio5_1 = ()=> {
    const empleados = [
    { nombre: "Ana Martínez", puesto: "Desarrolladora Frontend", edad: 28, salarioMensual: 3200 },
    { nombre: "Carlos López", puesto: "Diseñador UX/UI", edad: 32, salarioMensual: 2800 },
    { nombre: "María García", puesto: "Project Manager", edad: 35, salarioMensual: 3800 },
    { nombre: "David Rodríguez", puesto: "Desarrollador Backend", edad: 29, salarioMensual: 3400 },
    { nombre: "Laura Sánchez", puesto: "QA Tester", edad: 26, salarioMensual: 2600 }
    ];

    // Componente para cada empleado
    const EmployeeCard = ({ nombre, puesto, edad, salarioMensual }) => {
    const salarioAnual = salarioMensual * 12;

    return (
        <div>
        <h3>{nombre}</h3>
        <p><strong>Puesto:</strong> {puesto}<br></br>
        <strong>Edad:</strong> {edad} años<br></br>
        <strong>Salario mensual:</strong> {salarioMensual} dolares<br></br>
        <strong>Salario anual:</strong> {salarioAnual} dolares</p>
        </div>
    );
    };
    return(
        <div>
        <h2>Empleados</h2>
        {empleados.map((empleado, index) => (
            <EmployeeCard key={index} {...empleado} />
        ))}
        </div>        
    )
}

export default Ejercicio5_1;