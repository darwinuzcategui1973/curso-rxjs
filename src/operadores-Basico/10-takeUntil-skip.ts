import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const boton = document.createElement("button");
boton.innerHTML = "Detener Timer";

// vamos agregarlo en el body
document.querySelector("body").append(boton);

// crear nuestro primer observable

const contador$ = interval(1000);

// creamos el segundo Observable del clickd Boton
const clickBtn$ = fromEvent(boton, "click").pipe(
  tap(() => console.log("tap ante de skip")),
  skip(1),
  tap(() => console.log("tap después de skip"))
);

contador$.pipe(takeUntil(clickBtn$)).subscribe({
  next: val => console.log("next:", val),
  complete: () => console.log("completado")
});
