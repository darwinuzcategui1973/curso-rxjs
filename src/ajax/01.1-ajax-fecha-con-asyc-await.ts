import { of, from,Observer  } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from "rxjs/operators";
import { async } from 'rxjs/internal/scheduler/async';


const atrapaError =  (err:AjaxError)=>{
    console.warn('error en : ',err.message);
    return of([]);
}

//let url= 'http://localhost:3000/usuario_sin_token';
let url= 'https://stark-crag-88093.herokuapp.com/usuario_sin_token';
//let url= 'https://api.github.com/users?per_page=5';

ajax(url)
.pipe(
  //  map(resp=>resp.response)
  pluck('response'),
  catchError(atrapaError)
)

.subscribe(usuarios=>console.log('usuarios:',usuarios));

const fuente$= from(fetch(url))
fuente$.subscribe(async(resp)=>{
    console.log(resp);
    const dataResp =await resp.json();
    console.log(dataResp);

});