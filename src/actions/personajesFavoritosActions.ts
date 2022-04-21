import { Action, ActionCreator } from "@reduxjs/toolkit";
import Personaje from "../types/personaje.types";

interface AgregarFavoritoAction extends Action {
    type: "AGREGAR_FAVORITO",
    personaje: Personaje
}

interface EliminarFavoritoAction extends Action {
    type: "ELIMINAR_FAVORITO",
    personaje: Personaje
}

interface LimpiarFavoritosAction extends Action {
    type: "LIMPIAR_FAVORITOS"
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: "AGREGAR_FAVORITO",
        personaje
    }
};




export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: "ELIMINAR_FAVORITO",
        personaje
    }
};

export const LimpiarFavoritos: ActionCreator<LimpiarFavoritosAction> = () => {
    return {
        type: "LIMPIAR_FAVORITOS"
    }
};

export type FavoritosAction = AgregarFavoritoAction | EliminarFavoritoAction | LimpiarFavoritosAction;
