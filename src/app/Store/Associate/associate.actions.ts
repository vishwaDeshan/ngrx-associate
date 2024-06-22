import { createAction, props } from '@ngrx/store';
import { Associate } from '../Model/Associate.model';

export const LOAD_ASSOCIATES = '[Associate Page] Load Associate';
export const LOAD_ASSOCIATES_SUCCESS =
  '[Associate Page] Load Associate Success';
export const LOAD_ASSOCIATES_FAIL = '[Associate Page] Load Associate Fail';
export const ADD_ASSOCIATE = '[Associate Page] Add Associate';
export const ADD_ASSOCIATE_SUCCESS = '[Associate Page] Add Associate Success';
export const GET_ASSOCIATE = '[Associate Page] Get Associate';
export const GET_ASSOCIATE_SUCCESS = '[Associate Page] Get Associate Success';
export const UPDATE_ASSOCIATE = '[Associate Page] Update Associate';
export const UPDATE_ASSOCIATE_SUCCESS =
  '[Associate Page] Update Associate Success';
export const DELETE_ASSOCIATE = '[Associate Page] Delete Associate';
export const DELETE_ASSOCIATE_SUCCESS =
  '[Associate Page] Delete Associate Success';
export const OPEN_POPUP = '[Associate Page] Open Popup';

export const loadAssociates = createAction(LOAD_ASSOCIATES);

export const loadAssociatesSuccess = createAction(
  LOAD_ASSOCIATES_SUCCESS,
  props<{ associatesList: Associate[] }>()
);

export const loadAssociatesFail = createAction(
  LOAD_ASSOCIATES_FAIL,
  props<{ errorMessage: string }>()
);

export const addAssociates = createAction(
  ADD_ASSOCIATE,
  props<{ inputData: Associate }>()
);

export const addAssociatesSuccess = createAction(
  ADD_ASSOCIATE_SUCCESS,
  props<{ inputData: Associate }>()
);

export const getAssociates = createAction(
  GET_ASSOCIATE,
  props<{ id: number }>()
);

export const getAssociatesSuccess = createAction(
  GET_ASSOCIATE_SUCCESS,
  props<{ foundAssociate: Associate }>()
);

export const updateAssociate = createAction(
  UPDATE_ASSOCIATE,
  props<{ inputData: Associate }>()
);

export const updateAssociateSuccess = createAction(
  UPDATE_ASSOCIATE_SUCCESS,
  props<{ inputData: Associate }>()
);

export const deleteAssociate = createAction(
  DELETE_ASSOCIATE,
  props<{ id: number }>()
);

export const deleteAssociateSuccess = createAction(
  DELETE_ASSOCIATE_SUCCESS,
  props<{ id: number }>()
);

export const openPopup = createAction(OPEN_POPUP);
