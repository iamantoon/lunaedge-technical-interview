export interface IFullName {
    firstname: string;
    lastname: string;
    pokemon: string[];
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IError {
    message?: string;
}