import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateInputsModule,
    BrowserAnimationsModule,
    DialogsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
