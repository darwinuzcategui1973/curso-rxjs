import { fromEvent, interval } from "rxjs";
import { log } from "util";
import { mergeMap, switchMap } from "rxjs/operators";



// Voy crear mi fuentes de Observable
// o source en ingles
const click$ = fromEvent( document, 'click' );
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( ()=>interval$ )
    switchMap( ()=>interval$ )
).subscribe(console.log);





