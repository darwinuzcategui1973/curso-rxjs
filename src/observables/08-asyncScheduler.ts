import { asyncScheduler } from "rxjs";

// esto se hace con asyncScheduler en rxjs
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log("Hola Darwin");
const saludar2 = nombre => console.log(`Hola ${nombre} `);
const saludar3 = ({ nombre, segundoNombre }) =>
  console.log(`Hola ${nombre} ${segundoNombre} `);
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Darwin Uzcategui"); // el tercer paramametro es estado state solo un parametro
asyncScheduler.schedule(saludar3, 2000, {
  nombre: "Darwin",
  segundoNombre: "Felipe"
}); // el tercer paramametro es estado state solo un parametro cuando requeremo vario tenemos que mandar como objeto

// para utilizar con asyncScheduler el inteval no puede utilizar funciones de flecha
// vamos al ejemplo
const subcripcion = asyncScheduler.schedule(
  function(state) {
    console.log("Estado", state);
    // por esta razon para cambiar el estado
    // no puede ser funcion de flecha
    this.schedule(state + 1, 1000);
  },
  3000,
  0 /* este parametro es state que puede ser[]{} pero uno solo  */
);

// como es una subcrpcion lo puede desucribir
// setTimeout(() => {
//   subcripcion.unsubscribe();
// }, 6000);

// otra manera es con  asyncScheduler.schedule
asyncScheduler.schedule(() => subcripcion.unsubscribe(), 6000);
