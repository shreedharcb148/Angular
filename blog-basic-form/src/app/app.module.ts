import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { RedElDirective } from './directives/red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsdInrPipe,
    RedElDirective
  ],
  imports: [
    BrowserModule,
   // FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
