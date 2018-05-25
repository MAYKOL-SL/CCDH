import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { PublicacionImgUnComponent } from './publicacion-img-un/publicacion-img-un.component';
import { PublicacionImgMuchComponent } from './publicacion-img-much/publicacion-img-much.component';
import { ChatComponent } from './list-chat/chat.component';
import { NotifiComponent } from './notificaciones/notificaciones.component';
import { VideoLocalComponent } from './Video-Local/video-local.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, PrincipalComponent, CalendarComponent, 
                  MenuComponent, HeaderComponent, PerfilComponent, PublicacionesComponent,
                  PublicacionImgUnComponent, PublicacionImgMuchComponent, NotifiComponent,
                  ChatComponent,VideoLocalComponent]
})
export class ComunicationcdhModule { }
