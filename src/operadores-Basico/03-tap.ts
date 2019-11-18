import { range, from, fromEvent } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap(x => {
      console.log("antes", x);
      return 100; // esto no altera el observable o tap
    }),
    map(val => val * 10),
    tap({
      next: valor => console.log("despues", valor),
      complete: () => console.log("Se termino todo")
    })
    // tap(x => console.log("despues", x))
  )
  .subscribe(val => console.log("subsc", val));
