import { of, from } from "rxjs";

/**
 * of = crear un observable que toma argumento y genera un asecuencia
 * from = desde array,promise,iterable,observable y mas
 **/

// creamos un observador
const observer = {
  next: valor => console.log("next:", valor),
  complete: () => console.log("Completado")
};

// puede tambien con el from tomar generadores
const miGenerador = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();
// esta linea la puedo hacer con observable from
//   for(let indice of miIterable ){
//       console.log(indice);
//   }
from(miIterable).subscribe(observer);

// const origenObservable$ = from([1, 2, 3, 4, 5]);
// const origenObservable$ = of(...[1, 2, 3, 4, 5]);
// const origenObservable$ = of("Darwin");
//const origenObservable$ = from("Darwin");
// rxjs tiene una funciones para utilizar peticion ajax como observable mas adelante la utilizaremos
const origenObservable$ = from(
  fetch("https://api.github.com/users/darwinuzcategui")
);
// origenObservable$.subscribe(async (respuesta) => {

//     console.log(respuesta);
//     const dataResp = await respuesta.json()
//     console.log(dataResp);
// });

origenObservable$.subscribe(observer);
