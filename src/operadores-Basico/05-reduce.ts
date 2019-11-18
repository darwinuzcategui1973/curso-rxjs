import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

// operador reduce en javascrips puro
const ArreglosDenumeros = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActul: number) => {
  return acumulador + valorActul;
};

const total = ArreglosDenumeros.reduce(totalReducer, 0);

console.log("total Arreglo", total);

// ahora uso del reduce con rjxjs
interval(500)
  .pipe(
    take(6), // este operador completa el obser de acuerdo valor mandado
    tap(console.log),
    reduce(totalReducer, 0)
  )
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("completado")
  });
