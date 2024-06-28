import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';
import { filtrosValidos } from './models/filtrosValidos';

export const initialState: filtrosValidos = 'todos';

export const filtroReducer = createReducer<filtrosValidos>(
  initialState,
  on(setFiltro, (_, { filtro }) => filtro),
);
