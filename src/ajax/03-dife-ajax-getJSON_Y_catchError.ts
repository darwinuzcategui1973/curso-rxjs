import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://httpbin.org/delaya/1";
// const url = "https://api.github.com/users?per_page=5";
// funcion para manejar errores

const manejaErrores = (respuesta: AjaxError) => {
  console.warn("error: ", respuesta.message);
  return of({
    ok: false,
    usuarios: []
  });
};

// Diferencia entre ajax y ajax.getJSON
// const obs1$ = ajax.getJSON(url).pipe(
//     catchError(manejaErrores)
//     );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaErrores)
//     );

const obs1$ = ajax.getJSON(url);

obs1$.pipe(
    catchError(manejaErrores)
)
.subscribe({
  next: val => console.log("next", val),
  error: err => console.warn("error en Supcripcion", err),
  complete: () => console.log("completado")
});
// obs2$.subscribe(data => console.log("ajax", data));
