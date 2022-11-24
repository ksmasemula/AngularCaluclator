import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveVersionComponent } from './reactive-version/reactive-version.component';
import { TemplateDrivenVersionComponent } from './template-driven-version/template-driven-version.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveVersionComponent,
    TemplateDrivenVersionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
