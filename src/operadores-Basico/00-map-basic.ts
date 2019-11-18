import { range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// range(1, 5)
//   .pipe(
//     map<number, number>(val => {
//       return val * 10;
//     })
//   )

range(1, 5)
  .pipe(
    // map<number, number>(val => val * 10)
    map<number, string>(val => (val * 10).toString())
  )
  .subscribe(console.log);
// otro observable del eventos
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCode$ = keyup$.pipe(
    map( evento => evento.code)
)

 keyup$.subscribe(val => console.log("map", val.code));

keyupCode$.subscribe(code => console.log("map", code));
