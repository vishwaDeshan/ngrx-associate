import { createReducer, on } from '@ngrx/store';
import { AssociateStates } from './Associate.State';
import { loadAssociatesFail, loadAssociatesSuccess } from './Associate.actions';
import { state } from '@angular/animations';

const _associateReducer = createReducer(
  AssociateStates,
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
  })
);

export function AssociateReducer(state: any, action: any) {
  return _associateReducer(state, action);
}
