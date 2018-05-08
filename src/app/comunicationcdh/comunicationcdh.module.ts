import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionImgUnComponent } from './publicacion-img-un/publicacion-img-un.component';
import { PublicacionImgMuchComponent } from './publicacion-img-much/publicacion-img-much.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  exports: [
  ],
  declarations: [LoginComponent, PrincipalComponent, HeaderComponent, PerfilComponent, PublicacionesComponent, PublicacionImgUnComponent, PublicacionImgMuchComponent]
})
export class ComunicationcdhModule { }
