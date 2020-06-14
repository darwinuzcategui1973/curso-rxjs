import { forkJoin, of } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { catchError } from 'rxjs/operators';


const GMD_API_USER ='https://api.github.com/users'
const GMD_USER ='klerith'

//const GMD_API_USER ='https://stark-crag-88093.herokuapp.com/usuario_sin_token'
// const GMD_USER ='klerith'

forkJoin({
    usuario:ajax.getJSON(`${GMD_API_USER}/${GMD_USER}`),
    reposit:ajax.getJSON(`${GMD_API_USER}/${GMD_USER}/repos1`).
    pipe(
        catchError(error =>of([]))
    ),
    gists:ajax.getJSON(`${GMD_API_USER}/${GMD_USER}/gists`)

}).pipe(
    catchError(error=> of(error.message))
    ).subscribe(console.log);
