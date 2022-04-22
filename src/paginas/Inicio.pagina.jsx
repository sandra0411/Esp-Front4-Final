import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { limpiarFiltro, buscarPersonajesThunk } from "../actions/personajesActions";



const PaginaInicio = () => {

    const dispatch = useDispatch();

    /**
     * Función que se ejecuta cuando clickeamos el boton limpiar Filtro.
     * La misma despacha una accion que renderiza los primeros 20 personajes de la api.
     * Y una segunda acción que cambia el valor de la propiedad 
     * 'búsqueda' del estado global a un string vacío.  
     * @author Sandra Diván
     */
    const handleClick = ()=> {
        dispatch(buscarPersonajesThunk());
        dispatch(limpiarFiltro());
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleClick}>Limpiar filtro</button>
         
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
        
    </div>
}

export default PaginaInicio