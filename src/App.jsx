import { useCallback } from "react"
import Ejercicio1 from "./Ejercicios/ejercicio1.1"
import Ejercicio1_2 from "./Ejercicios/ejercicio1.2"
import Ejercicio2_1 from "./Ejercicios/ejercicio2.1";
import Ejercicio2_2 from "./Ejercicios/ejercicio2.2";
import Ejercicio3_1 from "./Ejercicios/ejercicio3.1";
import Ejercicio3_2 from "./Ejercicios/ejercicio3.2";
import Ejercicio4_1 from "./Ejercicios/ejercicio4.1";
import Ejercicio4_2 from "./Ejercicios/Ejercicio4.2";
import Ejercicio5_1 from "./Ejercicios/ejercicio5.1";
import Ejercicio5_2 from "./Ejercicios/ejercicio5.2";

/*
function App() {
  return (
    <div>
      <h1>¡Hola, React + Vite funciona!</h1>
      <p>Este proyecto está listo para iniciar.</p>
    </div>
  )
}
*/


const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}
const App = () => {
  const now = new Date()
  const a=10
  const b=20
  console.log(now, a+b)

  console.log('hello from component')
  return (
    <>
      <p>Hello world<br></br>
        {a} plus {b} is {a+b}
      </p>

      <Ejercicio1/>
      <Ejercicio1_2/>
      <Ejercicio2_1/>
      <Ejercicio2_2/>
      <Ejercicio3_1/>
      <Ejercicio3_2/>
      <Ejercicio4_1/>
      <Ejercicio4_2/>
      <Ejercicio5_1/>
      <Ejercicio5_2/>

    </>
    
  )
}

export default App
