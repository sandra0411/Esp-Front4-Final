import Episode from "../types/episode.types"

interface EpisodioProp {
    episode: Episode[]
}

export const buscarEpisodiosAPI = async ({episode}: EpisodioProp ): Promise<Episode[]> =>{
     
const arrayEpisodios = episode.map((episodio: any)=>(parseInt((episodio.split("/"))[5])))
        
    
    return fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodios}`)
    .then(data => data.json())
    .then(data => data)

}
