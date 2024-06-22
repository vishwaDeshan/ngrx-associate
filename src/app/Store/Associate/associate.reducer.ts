import { createReducer, on } from '@ngrx/store';
import { InitialAssociateStates } from './associate.state';
import {
  addAssociatesSuccess,
  deleteAssociateSuccess,
  getAssociatesSuccess,
  loadAssociatesFail,
  loadAssociatesSuccess,
  openPopup,
  updateAssociateSuccess,
} from './associate.actions';
import { state } from '@angular/animations';

const _associateReducer = createReducer(
  InitialAssociateStates,
  on(loadAssociatesSuccess, (state, action) => {
    return {
      ...state,
      assocaiteList: [...action.associatesList],
      errormessage: '',
    };
  }),
  on(loadAssociatesFail, (state, action) => {
    return {
      ...state,
      assocaiteList: [],
      errormessage: action.errorMessage,
    };
  }),
  on(addAssociatesSuccess, (state, action) => {
    const _maxId = Math.max(...state.assocaiteList.map((item) => item.id));
    const _newData = { ...action.inputData };
    _newData.id = _maxId + 1;
    return {
      ...state,
      assocaiteList: [...state.assocaiteList, _newData],
      errormessage: '',
    };
  }),
  on(getAssociatesSuccess, (state, action) => {
    return {
      ...state,
      associateobj: action.foundAssociate,
      errormessage: '',
    };
  }),
  on(updateAssociateSuccess, (state, action) => {
    const _updatedData = state.assocaiteList.map((a) => {
      return a.id === action.inputData.id ? action.inputData : a;
    });
    return {
      ...state,
      assocaiteList: _updatedData,
      errormessage: '',
    };
  }),
  on(deleteAssociateSuccess, (state, action) => {
    const _updatedData = state.assocaiteList.filter((a) => a.id !== action.id);
    return {
      ...state,
      assocaiteList: _updatedData,
      errormessage: '',
    };
  }),
  on(openPopup, (state) => {
    return {
      ...state,
      associateobj: { ...InitialAssociateStates.associateobj },
    };
  })
);

export function AssociateReducer(state: any, action: any) {
  return _associateReducer(state, action);
}
