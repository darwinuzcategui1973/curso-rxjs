import { interval } from 'rxjs';
import { take,tap,map } from 'rxjs/operators';

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(

        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        // solucion de Darwin

        // tap(v => console.log("tap: ", inicio-v)),
        // take(inicio+1)
       
        // solucion del profesor
        map(v=>inicio-v),
        take(inicio+1)
        
    );


    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================

})();