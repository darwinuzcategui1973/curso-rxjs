import { fromEvent, Observable } from "rxjs";
import { debounceTime, map, pluck, mergeAll } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { GithubUsuario } from "../interfaces/github-usuario.interface";
import { GithubUsuariosRespuesta } from "../interfaces/github-usuarios.interfaces";

// Referencias.
const body = document.querySelector('body');
const textInput = document.createElement('input');
const listaOrdenada = document.createElement('ol');

body.append( textInput, listaOrdenada);

// Helpers funciones
const mostrarUsuarios = (usuarios: GithubUsuario[]) => {
    
    console.log(usuarios)

    listaOrdenada.innerHTML= '';

    for (const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src =usuario.avatar_url;
        
        // creamos un link o anchor
        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver Página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        listaOrdenada.append(li);
        


    }
    
}

// Streams o fuentes de los observables$
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

// crear los set de operadores
input$.pipe(
    debounceTime<KeyboardEvent>(500), // espera 500mlsg 
    pluck<KeyboardEvent,string>('target','value'), //  Recolectar de evento en target los valores
    map<string, Observable<GithubUsuariosRespuesta>>(texto => ajax.getJSON( // el texto lo convertimos en una peticion ajax 
            `https://api.github.com/search/users?q=${ texto}`  // eso regresa un observable
        )),
        mergeAll<GithubUsuariosRespuesta>(), // el observable va se manejado por el operador mergeAll se sucribe y maneja todo internamente 
        pluck<GithubUsuariosRespuesta,GithubUsuario[]>('items') // cuando emita un valor el pluck va extarer los items
).subscribe( mostrarUsuarios );

//).subscribe(usuarios=>{
//    console.log(mostrarUsuarios);
// });

