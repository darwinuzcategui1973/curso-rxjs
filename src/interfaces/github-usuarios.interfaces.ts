import { GithubUsuario } from "./github-usuario.interface";

export interface GithubUsuariosRespuesta {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUsuario[];
}
