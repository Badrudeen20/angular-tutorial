import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RegisterComponent } from "./register/register.component";
import { ApplyComponent } from "./apply/apply.component";


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"apply",component:ApplyComponent}
];

// const routes: Routes = [
//   { path: '', loadChildren: () => import('./home/home.component').then(m => m.HomeComponent) },
//   { path: 'about', loadChildren: () => import('./about/about.component').then(m => m.AboutComponent) },
//   { path: 'register', loadChildren: () => import('./register/register.component').then(m => m.RegisterComponent) },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PageRoutingModule {}
