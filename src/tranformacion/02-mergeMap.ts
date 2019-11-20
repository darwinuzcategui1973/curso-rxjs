import { of, interval, fromEvent } from "rxjs";
import { mergeMap, take, map, takeUntil } from "rxjs/operators";


// ejemplo 1
const letras$  = of('a','b','c');

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i=> letra+" "+ i),
        take(3)
    ))

)
.subscribe({
    next: val => console.log('next: ', val ),
    complete: () =>console.log('completado')

 })

// ejemplo  2
 const mousedown$ = fromEvent<MouseEvent>( document, 'mousedown');
 const mouseup$ = fromEvent<MouseEvent>( document, 'mouseup');
 const interval$ = interval();

 mousedown$.pipe(
     mergeMap( () => interval$.pipe(
         takeUntil( mouseup$ )
         ))
         )
         .subscribe(console.log);

 