import { createAction, props } from "@ngrx/store";
import { filtrosValidos } from "./models/filtrosValidos";

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
