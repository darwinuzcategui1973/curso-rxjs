import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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
    nombre: "Canada"
  }
];
from(paises)
  .pipe(distinctUntilKeyChanged("nombre"))
  .subscribe(console.log);
