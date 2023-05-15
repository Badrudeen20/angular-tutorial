import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";



const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/page.module').then(m => m.PageModule)
  }
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
export class AppRoutingModule {}
