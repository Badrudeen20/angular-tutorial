import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { PageRoutingModule } from 'src/app/basic/pages/page-routing.module';

@NgModule({
  declarations: [
   MenuComponent
  ],
  imports: [
CommonModule,
PageRoutingModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
