import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter(val => val % 2 == 1))
//   .subscribe(console.log);

range(20, 30)
  .pipe(
    filter((val, i) => {
      console.log("indice", i);
      return val % 2 == 1;
    })
  )
  .subscribe(console.log);

// definimos una inteface
interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman"
  },
  {
    tipo: "heroe",
    nombre: "Superman"
  },
  {
    tipo: "heroe",
    nombre: "Aquaman"
  },
  {
    tipo: "villano",
    nombre: "Guason"
  }
];

const personajes$ = from(personajes).pipe(
  filter(person => person.tipo !== "heroe")
);
personajes$.subscribe(console.log);

// para encadenar operadores

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map(evento => evento.code), // recibe un keyboardEvent y retorna un string
  filter(key => key == "Enter")
);
keyup$.subscribe(console.log);
