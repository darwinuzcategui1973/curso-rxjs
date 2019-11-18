import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";

// mi Observable
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    // el ultimo argunemento inclusive true muestra el elemento que rompio la condicion en este caso y<= 150
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: val => console.log("next:", val),
    complete: () => console.log("Completado")
  });
