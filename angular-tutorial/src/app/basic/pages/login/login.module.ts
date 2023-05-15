import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from '../page-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
   CommonModule,
   PageRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
