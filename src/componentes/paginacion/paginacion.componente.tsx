import './paginacion.css';
import { TypedUseSelectorHook, useSelector as useReduxSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../store/store';
import {buscarPersonajesThunk } from "../../actions/personajesActions"

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector



/**
 * Componente que renderiza los botones para página anterior y siguiente
 * @author Sandra Diván 
 * @returns {JSX element} 
 */
const Paginacion = () : JSX.Element => {

const dispatch = useDispatch();

const {apiInfo} = useSelector((state)=>state.personajes)



const prev = apiInfo ? apiInfo.prev : ''; // null o page=2
const prevContent = prev !== null? ((prev.split('?'))[1]): '';

/**
 * Función que se ejecuta al clickear el botón Anterior de paginación.
 * La misma despacha una acción que hace una llamada a la api pidiéndole 
 * el número de página que recibe por parámetro 
 * @author Sandra Diván
 *
 */
const prevPage = ()=>dispatch(buscarPersonajesThunk(prevContent));



const next = apiInfo? apiInfo.next : '';
const nextContent = next !== null?((next.split('?'))[1]): '';
/**
 * Función que se ejecuta al clickear el botón Siguiente de paginación.
 * La misma despacha una acción que hace una llamada a la api pidiéndole 
 * el número de página que recibe por parámetro 
 * @author Sandra Diván
 *
 */
const nextPage = ()=>dispatch(buscarPersonajesThunk(nextContent));



    return <div className="paginacion">
        <button disabled={prev=== null? true: false} onClick= {prevPage} className={"primary"}>Anterior</button>
        <button disabled={next=== null? true: false} onClick={nextPage} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;