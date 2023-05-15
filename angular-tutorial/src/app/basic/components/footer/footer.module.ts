import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { PageRoutingModule } from '../../pages/page-routing.module';

@NgModule({
  declarations: [
    FooterComponent
    //MenuComponent
  ],
  imports: [
CommonModule,
PageRoutingModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
