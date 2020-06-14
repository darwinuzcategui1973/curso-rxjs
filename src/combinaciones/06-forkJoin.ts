import { of,interval, forkJoin } from "rxjs";
import { take, delay } from "rxjs/operators";



const numeros$    = of(1,2,3,4,5);
const intervalos$ = interval(1000).pipe(take(3)); //0...1..2
const letras$     = of('a','b','c').pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalos$,
//     letras$
// ).subscribe(console.log);

// forkJoin(
//     numeros$,
//     intervalos$,
//     letras$
// ).subscribe(resp=>{
//     console.log('numeros',resp[0])
//     console.log('intervalos',resp[1])
//     console.log(' letras',resp[2])
// });

forkJoin({
    num:numeros$,
    inter:intervalos$,
    let:letras$}
).subscribe(resp=>{
    console.log(resp)
   
});
