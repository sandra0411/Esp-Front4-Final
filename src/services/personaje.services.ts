 import Personaje from "../types/personaje.types";


/*  export const buscarPersonajeAPI = async (nombre?: string): Promise<Personaje[] | unknown> =>{

    let params = "?"
    if (nombre) {
        params += `name=${nombre}`
    }

    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${params}`);

        const data = await response.json();
        return data
          
    } catch (error) {

        return error  
    }
         
 } */

/*  export const buscarPersonajeAPI = async (url = 'https://rickandmortyapi.com/api/character/', nombre?: string): Promise<Personaje[]> =>{
    
    const params = `${nombre && '?' + nombre}`;

    return fetch(`${url}${params}`)    
    .then(data => data.json())
    .then(data => data)

 } */

 export const buscarPersonajeAPI = async (nombre?: string ): Promise<Personaje[]> =>{

    let params = "?"

    if (nombre) {
        if(nombre?.includes('page')) {params += nombre}
        else {params += `name=${nombre}`}
    }
    
    /* if (nombre) {
        params += `name=${nombre}
    } */

    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then(data => data.json())
    .then(data => data)

}


