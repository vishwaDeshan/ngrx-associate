import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociateService } from 'src/app/component/service/associate.service';
import {
  addAssociates,
  addAssociatesSuccess,
  deleteAssociate,
  deleteAssociateSuccess,
  getAssociates,
  getAssociatesSuccess,
  loadAssociates,
  loadAssociatesFail,
  loadAssociatesSuccess,
  updateAssociate,
  updateAssociateSuccess,
} from './associate.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { showAlert } from '../Common/app.actions';

@Injectable()
export class AssociateEffects {
  constructor(private actions$: Actions, private service: AssociateService) {}

  _loadAssociates = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAssociates),
      exhaustMap((action) => {
        return this.service.GetAllAssociate().pipe(
          map((data) => {
            return loadAssociatesSuccess({ associatesList: data });
          }),
          catchError(() => {
            return of(
              showAlert({ message: 'Error occured', resultType: 'fail' })
            );
          })
        );
      })
    )
  );

  _addAssociates = createEffect(() =>
    this.actions$.pipe(
      ofType(addAssociates),
      switchMap((action) => {
        return this.service.CreateAssociate(action.inputData).pipe(
          switchMap((data) => {
            return of(
              addAssociatesSuccess({ inputData: action.inputData }),
              showAlert({ message: 'Created successfully', resultType: 'pass' })
            );
          }),
          catchError(() => {
            return of(
              showAlert({
                message: 'Failed to create associate',
                resultType: 'fail',
              })
            );
          })
        );
      })
    )
  );

  _getAssociate = createEffect(() =>
    this.actions$.pipe(
      ofType(getAssociates),
      exhaustMap((action) => {
        return this.service.GetAssociateByCode(action.id).pipe(
          exhaustMap((data) => {
            return of(getAssociatesSuccess({ foundAssociate: data }));
          }),
          catchError(() => {
            return of(
              showAlert({
                message: 'Associate can not be found',
                resultType: 'fail',
              })
            );
          })
        );
      })
    )
  );

  _updateAssociate = createEffect(() =>
    this.actions$.pipe(
      ofType(updateAssociate),
      switchMap((action) => {
        return this.service.UpdateAssociate(action.inputData).pipe(
          switchMap((data) => {
            return of(
              updateAssociateSuccess({ inputData: action.inputData }),
              showAlert({ message: 'Updated successfully', resultType: 'pass' })
            );
          }),
          catchError(() => {
            return of(
              showAlert({
                message: 'Failed to update associate',
                resultType: 'fail',
              })
            );
          })
        );
      })
    )
  );

  _deleteAssociate = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAssociate),
      switchMap((action) => {
        return this.service.DeleteAssociate(action.id).pipe(
          switchMap((data) => {
            return of(
              deleteAssociateSuccess({ id: action.id }),
              showAlert({ message: 'Deleted successfully', resultType: 'pass' })
            );
          }),
          catchError(() => {
            return of(
              showAlert({
                message: 'Failed to deleted associate',
                resultType: 'fail',
              })
            );
          })
        );
      })
    )
  );
}
