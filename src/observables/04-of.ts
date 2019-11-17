import { of } from "rxjs";

// const observable$ = of<number>(1, 2, 3, 4, 5, 6);
// el operador ... expre que un coloca un areglo con su valores
//const observable$ = of<any>(...[1, 2, 3, 4, 5, 6],2,3,4);
const observable$ = of<any>(
  [1, 2],
  { a: 1, b: 2 },
  function() {},
  true,
  Promise.resolve(true),
  4,
  "texto",
  Date.now()
);

console.log("Inicio del Observable$");
observable$.subscribe(
  next => console.log("next", next),
  null,
  () => console.log("Finalizamos la secuencia !!!")
);
console.log("Fin del Observable$");
