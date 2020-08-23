import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./admin/login/login.module').then(m => m.LoginModule) },
  { path: 'visitors-details', loadChildren: () => import('./visitors-details/visitors-details.module').then(m => m.VisitorsDetailsModule) },
  { path: '**', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }