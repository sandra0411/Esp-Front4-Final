import Episode from "../types/episode.types"

//import { useSelector } from "../componentes/personajes/grilla-personajes.componente";

//const {episode}= useSelector((state)=> state.detalle.detallePersonaje);// string[]


export const buscarEpisodiosAPI = async (episode: string[]): Promise<Episode[]> =>{
    const arrayEpisodios: number[] = [];

    episode?.map((episodio)=>arrayEpisodios.push(parseInt((episodio.split("/"))[5])))
    
    
    console.log('arrayEpisodios:', arrayEpisodios);
    
    
    return fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodios}`)
    .then(data => data.json())
    .then(data => data)

}
