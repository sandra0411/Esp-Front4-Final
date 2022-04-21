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

//creamos type que incluye todas las interfaces anteriores
export type PersonajesAction = BuscarPersonajesAction | BuscarPersonajesExitoAction | BuscarPersonajesErrorAction | LimpiarFiltroAction | FiltrarPersonajesAction;

//ThunkAction genéricos
//1- corresponde al tipo que devuelve la función
//2- el tipo del estado global que fue definido en el Store. Contiene el combineReducers
//3- argumentos extras. Solo le ponemos unknown en este caso
//4- tipo de las acciones que queremos que se ejecuten de forma diferida

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









