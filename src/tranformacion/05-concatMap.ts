import { interval, fromEvent } from "rxjs";
import { take, switchMap, concatMap } from "rxjs/operators";


const interval$ = interval(500).pipe( take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    concatMap( ()=> interval$) // este operador lo cocatena secuencialmente uno despues de otro despues de haber terminado

)
.subscribe(console.log);





