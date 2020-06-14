import { fromEvent,merge,of } from 'rxjs';
import { map, pluck, catchError } from "rxjs/operators";
import { ajax, AjaxError } from 'rxjs/ajax';


const atrapaError =  (err:AjaxError)=>{
    console.warn('error en : ',err.message);
    return of([]);
}

let url= 'https://stark-crag-88093.herokuapp.com/usuario_sin_token';

const keyup$ = fromEvent(document,'keyup');
const click$ = fromEvent(document,'click');

const fuente$= ajax(url)
.pipe(
  //  map(resp=>resp.response)
  pluck('response'),
  catchError(atrapaError)
)

merge(
    fuente$.pipe(pluck('cuantosReg')),
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
    ).subscribe(console.log);


