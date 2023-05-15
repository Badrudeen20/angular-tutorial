import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { PageRoutingModule } from '../page-routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
   CommonModule,
   PageRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
