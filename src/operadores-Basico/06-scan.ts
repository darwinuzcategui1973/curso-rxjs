import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAlcum = (acum, valorActul) => {
//   return acum + valorActul;

// }
const totalAlcum = (acum, vActual) => acum + vActual;

// Reduce
from(numeros)
  .pipe(reduce(totalAlcum, 0))
  .subscribe(console.log);

// Scan
from(numeros)
  .pipe(scan(totalAlcum, 0))
  .subscribe(console.log);

//Redux--> el scan es la base del patron redux es patron que maneja el estado global de applicacion en solo objeto

interface Usuario {
  id?: string; // cuando le pongo el sigono de interrogación en opcional la propiedad
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: "darwin", autenticado: false, token: null },
  { id: "darwin", autenticado: true, token: "abc" },
  { id: "darwin", autenticado: true, token: "abc123" }
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acum, vActual) => {
      return { ...acum, ...vActual };
    },
    { edad: 46 }
  )
);

const id$ = state$.pipe(map(state => state));

id$.subscribe(console.log);
