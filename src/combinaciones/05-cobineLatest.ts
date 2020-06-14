//video 93 combineLatest

import { fromEvent,of, combineLatest } from 'rxjs';
import { map, pluck, catchError } from "rxjs/operators";
import { ajax, AjaxError } from 'rxjs/ajax';


// const atrapaError =  (err:AjaxError)=>{
//     console.warn('error en : ',err.message);
//     return of([]);
// }

// let url= 'https://stark-crag-88093.herokuapp.com/usuario_sin_token';

// const keyup$ = fromEvent(document,'keyup');
// const click$ = fromEvent(document,'click');

// const fuente$= ajax(url)
// .pipe(
//   //  map(resp=>resp.response)
//   pluck('response'),
//   catchError(atrapaError)
// )

// combineLatest(
//     fuente$.pipe(pluck('cuantosReg')),
//     keyup$.pipe(pluck('type')),
//     click$.pipe(pluck('type'))
//     ).subscribe(console.log);


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder ='email@gmail.com';
input2.placeholder ='********';
input2.type ='password';

document.querySelector('body').append(input1,input2)

// Funciones helper
const getInputStream =(elementohtml:HTMLElement) =>
    fromEvent<KeyboardEvent>(elementohtml,'keyup').pipe(
     pluck<KeyboardEvent,string>('target','value'));


combineLatest(
    getInputStream(input1),
    getInputStream(input2),

).subscribe(console.log)
