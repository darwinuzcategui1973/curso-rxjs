import { ajax, AjaxError } from "rxjs/ajax";
import { map, pluck, catchError } from "rxjs/operators";
import { of } from "rxjs";

// const url= 'http://localhost:3000/usuario_sin_token';
const url   = 'https://stark-crag-88093.herokuapp.com/usuario_sin_token';
// const url= 'https://api.github.com/users?per_page=5';

const manejaErrores = (respuesta: Response) => {
  if (!respuesta.ok) {
    throw new Error(respuesta.statusText);
  }
  return respuesta;
};

const atrapaError = (error: AjaxError) => {
    console.warn("error en:", error.message);
    return of([]);
  };

const fetchPromesa = fetch(url);

// fetchPromesa
//   .then(resp => resp.json())
//   // .then(console.log)
//   .then(data => console.log("data:", data))
//   .catch(error => console.warn("error en usuario:", error));

//   fetchPromesa
//   .then(manejaErrores)
//   .then(resp => resp.json())
//   // .then(console.log)
//   .then(data => console.log("data:", data))
//   .catch(error => console.warn("error en usuario:", error));

ajax(url)
  .pipe(
    // map(resp=> resp.response)
    pluck("response"),
    catchError(atrapaError)
  )
  .subscribe(users => console.log("usuarios", users));
