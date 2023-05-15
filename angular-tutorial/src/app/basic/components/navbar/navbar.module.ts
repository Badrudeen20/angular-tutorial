import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { MenuModule } from './components/menu/menu.module';
import { ComponentModule } from '../component.module';
import { PageRoutingModule } from '../../pages/page-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    //MenuComponent
  ],
  imports: [
CommonModule,
MenuModule,
PageRoutingModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
