import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { PageRoutingModule } from '../pages/page-routing.module';

@NgModule({
  imports: [
   CommonModule,
   FooterModule,
   NavbarModule,
  ],
 exports:[FooterModule,NavbarModule]
})
export class ComponentModule { }
