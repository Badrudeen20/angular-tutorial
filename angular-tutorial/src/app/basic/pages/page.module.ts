import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { PageRoutingModule } from './page-routing.module';
import { RegisterModule } from './register/register.module';
import { ApplyModule } from './apply/apply.module';

@NgModule({
  imports: [
   CommonModule,
   HomeModule,
   AboutModule,
   RegisterModule,
   ApplyModule,
   PageRoutingModule
  ],
 //exports:[HomeModule,AboutModule,RegisterModule]
})
export class PageModule { }
