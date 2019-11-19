import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of<number | string>(1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 2, 3, 1);
numeros$
  .pipe(
    distinct() // utiliza el triple  ===
  )
  .subscribe(console.log);

interface Pais {
  nombre: string;
}

const paises: Pais[] = [
  {
    nombre: "Colombia"
  },
  {
    nombre: "Venezuela"
  },
  {
    nombre: "Peru"
  },
  {
    nombre: "Chile"
  },
  {
    nombre: "España"
  },
  {
    nombre: "Chile"
  },
  {
    nombre: "España"
  },
  {
    nombre: "Canada"
  },
  {
    nombre: "Venezuela"
  }
];
from(paises)
  .pipe(distinct(pais => pais.nombre))
  .subscribe(console.log);
