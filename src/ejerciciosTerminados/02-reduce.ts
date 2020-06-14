import { from } from 'rxjs';
import {  reduce ,filter} from "rxjs/operators";

(() =>{

 const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  const totalReducer = (acumulador: number, valorActul: number) => {
    return acumulador + valorActul;
  };

 // const totalReducer1 = (acumulador: number, valorActul: number) =>  acumulador + valorActul;


  from(datos).pipe(
    filter<any>(dato =>  !isNaN(dato)),
   // con funcion externa 
   // reduce(totalReducer, 0)
   //**sin funcion 
   reduce((acum,actual)=>acum+actual)

  ).subscribe( console.log ) 



})();