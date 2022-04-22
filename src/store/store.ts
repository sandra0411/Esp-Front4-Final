
import {combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import personajesReducer from "../reducers/personajesReducer";
import { createStore, applyMiddleware } from 'redux';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import thunk from "redux-thunk";
import favoritosReducer from "../reducers/personajesFavoritosReducer";
import detalleReducer from "../reducers/detalleReducer";



const rootReducer = combineReducers({
   personajes: personajesReducer,
   personajesFavoritos: favoritosReducer,
   detalle: detalleReducer
});

export type IRootState = ReturnType<typeof rootReducer>;


export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) 
)