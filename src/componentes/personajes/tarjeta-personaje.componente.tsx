
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {useDispatch} from "react-redux";
import {useSelector} from "./grilla-personajes.componente";
import {agregarFavorito, eliminarFavorito} from "../../actions/personajesFavoritosActions";
import { buscarEpisodiosThunk, verDetalle } from '../../actions/detalleActions';
import Personaje from '../../types/personaje.types';
import { useNavigate } from "react-router-dom";




/**
 * Componente que renderiza una Tarjeta para cada personaje dentro de la grilla de personajes. 
 * @author Sandra Diván
 * @param {Personaje} personaje
 * @returns {JSX element} 
 */




const TarjetaPersonaje = ({image, name, id, location, gender, episode }:Personaje):JSX.Element  => {

    const dispatch = useDispatch();

    const navigate= useNavigate();

    const favoritos= useSelector((state)=> state.personajesFavoritos.favoritos);
    let esFavorito = favoritos.some((favorito)=> favorito.id === id);



    /**
     * Función que se dispara al clickear el botonFavorito.
     * Si el personaje aún no pertenecia a Favoritos, despacha la acción para agregarlo.
     * Y si ya pertenece, despacha la acción para eliminarlo del array de favoritos.
     * @author Sandra Diván
     */
    const handleClick= ()=>{
        if(!esFavorito){
            dispatch(agregarFavorito({image, name, id}));
        } else {
            dispatch(eliminarFavorito({image, name, id}));
        }
    }
    

    const handleClick_2= ()=>{
        
        dispatch(verDetalle({image, name, id, location, gender, episode}));
     
        
        dispatch(buscarEpisodiosThunk({episode}))
        navigate("detalle");
    }




    return <div className="tarjeta-personaje" key={"personaje_"+ id}>
        
            <img src= {image} alt= {name} onClick={handleClick_2}/>
    
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={esFavorito} onClick={handleClick}/> 
        </div>
    </div>
}

export default TarjetaPersonaje;