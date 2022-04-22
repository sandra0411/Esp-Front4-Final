
import { useDispatch } from "react-redux";
import { LimpiarFavoritos } from "../actions/personajesFavoritosActions";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { useSelector } from "../componentes/personajes/grilla-personajes.componente";


const PaginaFavoritos = () => {

    const favoritos = useSelector((state)=> state.personajesFavoritos.favoritos);
    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(LimpiarFavoritos());
    }

    if (!favoritos || favoritos.length === 0)
    return <div className="container">
        <h3 className="message">Aún no has seleccionado personajes favoritos =/</h3>
    </div>;
    
    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={handleClick}>Eliminar todo</button>
        </div>
        <div className="grilla-personajes">
        {favoritos.map((favorito) => {

            return (
                <TarjetaPersonaje   name={favorito.name}
                                    image={favorito.image}
                                    id={favorito.id}
                                    key={favorito.id}/>
                                    
                                    
            )
        })}


    </div>
        
    </div>
}

export default PaginaFavoritos