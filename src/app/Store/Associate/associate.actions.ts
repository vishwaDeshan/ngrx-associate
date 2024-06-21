import { createAction, props } from '@ngrx/store';
import { Associates } from '../Model/Associate.model';

export const LOAD_ASSOCIATES = '[Associate Page] Load Associates';
export const LOAD_ASSOCIATES_SUCCESS =
  '[Associate Page] Load Associates Success';
export const LOAD_ASSOCIATES_FAIL = '[Associate Page] Load Associates Fail';

export const loadAssociates = createAction(LOAD_ASSOCIATES);

export const loadAssociatesSuccess = createAction(
  LOAD_ASSOCIATES_SUCCESS,
  props<{ associatesList: Associates[] }>()
);

export const loadAssociatesFail = createAction(
  LOAD_ASSOCIATES_FAIL,
  props<{ errorMessage: string }>()
);
