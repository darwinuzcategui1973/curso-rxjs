import { fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, "click"); // viendo evento click
const src2$ = fromEvent<KeyboardEvent>(document, "keyup"); // viendo envento cuando se suelta la tecla

// creamos el observador
const observador = {
  next: valor => console.log("next", valor)
};

// src1$.subscribe(observador);
// src1$.subscribe(eventomouse => {
//   console.log(eventomouse.x);
//   console.log(eventomouse.y);
// });

src1$.subscribe(({x,y})=>{
  console.log(x,y);

});

src2$.subscribe(evento => {
  console.log(evento.key);
});
