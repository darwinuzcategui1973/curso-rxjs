import { fromEvent, of } from "rxjs";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

// Helper o fuciones auxiliar
const peticionHttpLogin = (userPass) => 
    ajax.post('https://reqres.in/api/login?delay=1',userPass)
    .pipe(
        pluck('response','token'),
        catchError(err => of('xxx'))
    )




// crear formulario atravez de codigo

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones a los objetos
inputEmail.type = 'email';
inputEmail.placeholder='Correo Electronico';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder='Clave secreta';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

// insertar lo objetos que estan en codigo en html con append
form.append( inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map( ev =>({
        email:ev.target[0].value,
        password:ev.target[1].value
    })),
    // mergeMap( peticionHttpLogin)
    // switchMap( peticionHttpLogin)
    exhaustMap( peticionHttpLogin)
);

submitForm$.subscribe( token=> {
    console.log(token);
})

