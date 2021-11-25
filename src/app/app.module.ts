import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VoertuigInfoFormComponent } from './voertuig-info-form/voertuig-info-form.component';
import { VoertuigInfoService } from './services/voertuig-info.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VoertuigInfoFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [VoertuigInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
