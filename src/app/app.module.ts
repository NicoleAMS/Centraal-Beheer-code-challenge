import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VoertuigInfoFormComponent } from './voertuig-info-form/voertuig-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VoertuigInfoFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
