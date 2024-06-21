import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AssociateService } from 'src/app/component/service/associate.service';
import {
  loadAssociates,
  loadAssociatesFail,
  loadAssociatesSuccess,
} from './Associate.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

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
          catchError((_error) => {
            return of(loadAssociatesFail({ errorMessage: 'Error Occured' }));
          })
        );
      })
    )
  );
}
