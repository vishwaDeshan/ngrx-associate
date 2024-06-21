import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssociateModel } from '../Model/Associate.model';

const getAssociatesStates = createFeatureSelector<AssociateModel>('associate'); // name which is used for app module store

export const getAssociateList = createSelector(
  getAssociatesStates,
  (state: AssociateModel) => state.assocaiteList
);
