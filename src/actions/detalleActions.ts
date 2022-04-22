import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";
import { IRootState } from "../store/store";
import { buscarEpisodiosAPI } from "../services/detalle.service";
import Episode from "../types/episode.types";


export interface verDetallePersonajeAction extends Action {
    type: "VER_DETALLE",
    personaje: Personaje
}

export interface BuscarEpisodiosExitoAction extends Action{
    type: "BUSCAR_EPISODIOS_EXITO",
    data: Episode[]
}



export interface BuscarEpisodiosErrorAction extends Action{
    type: "BUSCAR_EPISODIOS_ERROR",
    error: string
}

const buscarEpisodiosExito: ActionCreator<BuscarEpisodiosExitoAction> = (data: Episode[]) => {
    return{
        type: "BUSCAR_EPISODIOS_EXITO",
        data: data
    }
}

const buscarEpisodiosError: ActionCreator<BuscarEpisodiosErrorAction> = (error: string) => {
    return{
        type: "BUSCAR_EPISODIOS_ERROR",
        error: error
    }
}

export const verDetalle: ActionCreator<verDetallePersonajeAction> = (personaje: Personaje) => {
  
    
    return {
        type: "VER_DETALLE",
        personaje: personaje
    }
};

export type DetallesAction = BuscarEpisodiosExitoAction | BuscarEpisodiosErrorAction | verDetallePersonajeAction;



interface BuscarEpisodiosThunkAction extends ThunkAction<void, IRootState, unknown, DetallesAction>{};


export const buscarEpisodiosThunk = (episode: any): BuscarEpisodiosThunkAction => {

    return async (dispatch) => {

        try {
            const dataAPI = await buscarEpisodiosAPI(episode);
            dispatch(buscarEpisodiosExito(dataAPI));
           
            
        } catch (error) {
            dispatch(buscarEpisodiosError(error));
            
        }
        
    }
}
