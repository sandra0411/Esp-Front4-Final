import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { IRootState } from "../store/store";
import { buscarPersonajeAPI } from "../services/personaje.services";

interface buscarPersonajeParams {
    info:{
        count:number,
        next: string,
        pages: number,
        prev: string
    },

    results: Personaje[]
}

//creando interfaces de ts
export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES"
}

export interface FiltrarPersonajesAction extends Action{
    type: "FILTRAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesExitoAction extends Action{
    type: "BUSCAR_PERSONAJES_EXITO",
    data: buscarPersonajeParams
}



export interface BuscarPersonajesErrorAction extends Action{
    type: "BUSCAR_PERSONAJES_ERROR",
    error: string
}

export interface LimpiarFiltroAction extends Action{
    type: "LIMPIAR_FILTRO"
}


export type PersonajesAction = BuscarPersonajesAction | BuscarPersonajesExitoAction | BuscarPersonajesErrorAction | LimpiarFiltroAction | FiltrarPersonajesAction;



interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAction>{};



export const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = () => {
    return{
        type: "BUSCAR_PERSONAJES"
    }
}

export const filtrarPersonajes: ActionCreator<FiltrarPersonajesAction> = (name: string) => {
    return{
        type: "FILTRAR_PERSONAJES",
        name: name
    }
}


const buscarPersonajesExito: ActionCreator<BuscarPersonajesExitoAction> = (data: buscarPersonajeParams) => {
    return{
        type: "BUSCAR_PERSONAJES_EXITO",
        data: data
    }
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return{
        type: "BUSCAR_PERSONAJES_ERROR",
        error: error
    }
}

export const limpiarFiltro: ActionCreator<LimpiarFiltroAction> = ()=>{
    return {type: "LIMPIAR_FILTRO"}
}

const caracteresMinimos = 3;

export const buscarPersonajesThunk = (name?: string): BuscarPersonajesThunkAction => {

    return async (dispatch) => {
        if(name && name.length < caracteresMinimos) {return null};
        dispatch(buscarPersonajes());
        try {
            const dataAPI = await buscarPersonajeAPI(name);
            dispatch(buscarPersonajesExito(dataAPI));
        } catch (error) {
            dispatch(buscarPersonajesError(error));
            
        }
        
    }
}









