import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './comunicationcdh/login/login.component';
import { PrincipalComponent } from './comunicationcdh/principal/principal.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
     path: 'principal',
     component: PrincipalComponent
   },
   {
     path: '**', pathMatch: 'full', redirectTo: 'login'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

