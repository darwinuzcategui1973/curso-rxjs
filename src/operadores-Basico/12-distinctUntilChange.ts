import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numeros$ = of<number | string>(1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 2, 3, 1);
numeros$
  .pipe(
    distinctUntilChanged() // utiliza el triple  === emite si anterior es destinto
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
    nombre: "Colombia"
  },
  {
    nombre: "Peru"
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
    nombre: "Venezuela"
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
  .pipe(
    distinctUntilChanged(
      (anterior, actual) => anterior.nombre === actual.nombre
    )
  )
  .subscribe(console.log);
