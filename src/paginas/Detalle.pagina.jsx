import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useDispatch } from "react-redux";
import { useSelector } from "../componentes/personajes/grilla-personajes.componente";
import { useEffect } from "react";


/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */


const PaginaDetalle = () => {

    const dispacth = useDispatch();

    const detallePersonaje = useSelector((state) => state.detalle.detallePersonaje);
    const episodios = useSelector(state => state.detalle.episodios);
    console.log(episodios);//no esta llegando nada 

    if (detallePersonaje.id === 0) return <div className='container'>
        <h3 className='message'>No seleccionaste ningún Personaje</h3> </div>


    return <div className="container">
        <h3>{detallePersonaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={detallePersonaje.image} alt={detallePersonaje.name} />
                <div className={"detalle-header-texto"}>

                    <p>{detallePersonaje.name}</p>
                    <p>Planeta: {detallePersonaje.location?.name} </p>
                    <p>Genero: {detallePersonaje.gender}</p>
                </div>
                <BotonFavorito esFavorito={false} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {episodios.map(episodio => {

                return (
                    <TarjetaEpisodio
                        name={episodio.name}
                        air_date={episodio.air_date}
                        episode={episodio.episode}
                    />
                )
            })}


        </div>
    </div>
}

export default PaginaDetalle;
