import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociateService } from 'src/app/component/service/associate.service';
import {
  addAssociates,
  addAssociatesSuccess,
  loadAssociates,
  loadAssociatesFail,
  loadAssociatesSuccess,
} from './Associate.actions';
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
              showAlert({ message: 'Error occured', resultType: 'fail' })
            );
          })
        );
      })
    )
  );
}
