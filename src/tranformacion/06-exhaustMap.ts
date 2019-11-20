import { interval, fromEvent } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";


const interval$ = interval(500).pipe( take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    exhaustMap( ()=> interval$) // deja una sola observable interno activo e ignora la sucripciones si no ha terminado el ultimo interno activo

)
.subscribe(console.log);








