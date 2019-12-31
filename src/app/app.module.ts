import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { EmpFormComponent } from './emp-form/emp-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {freeApiService} from './services/freeapi.service';


@NgModule({
  declarations: [
    AppComponent
   // EmpFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule
   // MatAutocompleteModule,
   // MatInputModule,
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
