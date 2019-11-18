import { of, range, asyncScheduler } from "rxjs";

// const fuenteObs$ = of(1, 2, 3, 4, 5);
const fuenteObs$ = range(1,5, asyncScheduler); // posicion inicial hasta el valor final

console.log("Inicio");
fuenteObs$.subscribe(console.log);
console.log("fin");
