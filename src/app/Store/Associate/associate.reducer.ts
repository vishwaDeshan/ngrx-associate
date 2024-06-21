import { createReducer, on } from '@ngrx/store';
import { InitialAssociateStates } from './associate.state';
import {
  addAssociatesSuccess,
  loadAssociatesFail,
  loadAssociatesSuccess,
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
  })
);

export function AssociateReducer(state: any, action: any) {
  return _associateReducer(state, action);
}
