import { interval, timer } from "rxjs";

const observador = {
  next: valor => console.log("next", valor),
  complete: () => console.log("Completado")
};

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const observableInteval$ = interval(1000);
// const observableTimer$ = timer(2000,1000); // que inicie mi secuencia despues de 2seg
// const observableTimer$ = timer(); // si no se especifica lo hace inmediatamnete pueda
const observableTimer$ = timer(hoyEn5); // se va ejecutar hoy en 5 segundo

console.log("inicio");
// observableInteval$.subscribe(observador);
observableTimer$.subscribe(observador);
console.log("fin demotracion de que asyncrono por naturaleza");
