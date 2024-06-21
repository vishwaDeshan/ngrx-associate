import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { AddassociateComponent } from './component/addassociate/addassociate.component';
import { MaterialModule } from './Material.Module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AssociateReducer } from './Store/Associate/associate.reducer';
import { AssociateEffects } from './Store/Associate/Associate.effects';
import { AppEffects } from './Store/Common/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    AssociatelistingComponent,
    AddassociateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ associate: AssociateReducer }),
    EffectsModule.forRoot([AssociateEffects, AppEffects]),
    //StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true,
    }),
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
})
export class AppModule {}
