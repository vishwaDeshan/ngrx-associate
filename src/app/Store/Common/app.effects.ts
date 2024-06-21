import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, of } from 'rxjs';
import { emptyAction, showAlert } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  _showAlert = createEffect(() =>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.ShowSnackBarAlert(action.message, action.resultType)
          .afterDismissed()
          .pipe(
            map(() => {
              return emptyAction();
            })
          );
      })
    )
  );

  ShowSnackBarAlert(message: string, resultType: string = 'fail') {
    let _class = resultType == 'pass' ? 'green-snackbar' : 'red-snackbar';
    return this.snackBar.open(message, 'Ok', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 5000,
      panelClass: [_class],
    });
  }
}
