import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssociateModel } from '../Model/Associate.model';

const getAssociatesState = createFeatureSelector<AssociateModel>('associate'); // name which is used for app module store

export const getAssociateList = createSelector(
  getAssociatesState,
  (state: AssociateModel) => state.assocaiteList
);

export const getAssociate = createSelector(
  getAssociatesState,
  (state: AssociateModel) => state.associateobj
);
