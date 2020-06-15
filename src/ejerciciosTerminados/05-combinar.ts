import { interval, timer,combineLatest } from 'rxjs';
import { map, take, pluck } from 'rxjs/operators';

(() =>{

    const letras  = ['a','b','c','d','e'];
    const numeros = [1,2,3,4,5];

    // Emite letras cada segundo
    const letras$  = interval(1000).pipe(
        map( i => letras[i] ),
        take( letras.length )
    );
    
    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial
    // de 500 milésimas 
    const numeros$ = timer(500,1000).pipe(
        map( i => numeros[i] ),
        take( numeros.length )
    );

    // ========================================
    // Empezar a codificar aquí abajo
    // Nota, el subscribe debe de ser así
    // .subscribe( console.log )
    // Es decir, la salida en el subscribe debe 
    // de estar procesada en su totalidad
    // ========================================

    // solucion de Darwin Uzcategui
//      combineLatest(
//       letras$,
//       numeros$,
//   ).subscribe(console.log);
  // solucion de Fernando Herrera
  combineLatest(letras$,numeros$).pipe(
      map(([letra,numero])=>letra+numero)
  )
      .subscribe(console.log);

})();