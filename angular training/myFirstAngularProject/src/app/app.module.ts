import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    SalesPersonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
