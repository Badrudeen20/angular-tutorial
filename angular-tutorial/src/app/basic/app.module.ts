import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
