import { Reducer } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { DetallesAction } from "../actions/detalleActions";
import Episode from "../types/episode.types";

export interface DetalleState {
    detallePersonaje: Personaje;
    error: string,
    status: "COMPLETADO" | "COMPLETADO_CON_ERROR",
    episodios: Episode[]
}

const initialState: DetalleState = {
    detallePersonaje: {
        id: 0,
        name: '',
        image: '',
        episode: []
    },
    error: '',
    status: "COMPLETADO",
    episodios: []

}

const detalleReducer: Reducer<DetalleState, DetallesAction> = (
    state = initialState,
    action
): DetalleState => {
    switch (action.type) {
        case "VER_DETALLE":
         

            return {
                ...state,
                detallePersonaje: action.personaje
            };
            case "BUSCAR_EPISODIOS_EXITO":
                return {
                    ...state,
                    status: "COMPLETADO",
                    episodios: action.data
                    
                }
          
            case "BUSCAR_EPISODIOS_ERROR":
                return {
                    ...state,
                    status: "COMPLETADO_CON_ERROR",
                    episodios: [], 
                    error: action.error
                }
        default:
            return state;
    }
}

export default detalleReducer;