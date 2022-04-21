import './filtros.css';
import {FC, useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import { buscarPersonajesThunk, filtrarPersonajes} from '../../actions/personajesActions';
import { useSelector } from './grilla-personajes.componente';

/**
 * Componente que renderiza el input para buscar por personaje
 * @author Sandra Diván
 * @returns {JSX.Element}
 */

const Filtros: FC = () : JSX.Element => {

    const dispatch = useDispatch();
    const {busqueda} = useSelector(state=>state.personajes);

    useEffect(() => {
       dispatch(buscarPersonajesThunk());
    }, [])

    /**
     * Función que despacha 2 acciones cuando se produce un cambio en el valor del input. 
     * La primer acción trae los personajes que coincidan con el valor que recibe por
     * parámetro y la segunda acción guarda en el estado global el valor que ingresa el usuario
     * en el input
     * @author Sandra Diván
     * @param {Event} e 
     */

    const handlerChange = (e:any)=>{
       dispatch(buscarPersonajesThunk(e.target.value)) 
       dispatch(filtrarPersonajes(e.target.value))
    }


    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input value= {busqueda} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
        onChange={(e)=> handlerChange(e)}/>
    </div>
    
}

export default Filtros;