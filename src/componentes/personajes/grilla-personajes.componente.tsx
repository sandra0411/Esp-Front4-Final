import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { IRootState } from '../../store/store';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import React, { FC } from 'react';


export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

/**
 * Componente que renderiza las tarjetas de personajes en la pagina de inicio
 * @author Sancdra Diván
 * @returns {JSX element} 
 */
const GrillaPersonajes: FC = (): JSX.Element => {

    const { personajes, status } = useSelector(state => state.personajes); {/**este personajes viene del combineReducers, y tiene dentro toda la data del estado global */ }

    if (status === "CARGANDO") return <div>Cargando Personajes...</div>
    if (!personajes || personajes.length === 0) return <div className='container'>
        <h3 className='message'>Parece que el personaje que buscas no existe...</h3> </div>

    return <div className="grilla-personajes">
        {personajes.map((personaje) => {

            return (

                <TarjetaPersonaje
                    name={personaje.name}
                    image={personaje.image}
                    id={personaje.id}
                    key={personaje.id}
                    location={personaje.location} 
                    gender={personaje.gender}
                    episode={personaje.episode}

                />

            )
        })}
    </div>
}

export default GrillaPersonajes;