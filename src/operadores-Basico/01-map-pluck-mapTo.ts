import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

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

const keyupCode$ = keyup$.pipe(map(evento => evento.code));
const keyupPluck$ = keyup$.pipe(pluck("key"));

const keyupPluck1$ = keyup$.pipe(pluck("target", "baseURI"));

const keyupMapTo$ = keyup$.pipe(mapTo("TeclaPresionada"));

keyup$.subscribe(console.log);
// keyup$.subscribe(val => console.log("map", val.code));
keyupCode$.subscribe(code => console.log("map", code));
keyupPluck$.subscribe(code => console.log("pluck", code));

keyupPluck1$.subscribe(code => console.log("pluck", code));

keyupMapTo$.subscribe(code => console.log("MapTo", code));
