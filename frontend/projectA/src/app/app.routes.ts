import { Routes } from '@angular/router';
import { User } from './user/user';
import { JuegosPendientes } from './juegos-pendientes/juegos-pendientes';

export const routes: Routes = [
  { path: 'user', component: User },
  { path: 'juegos-pendientes', component: JuegosPendientes },
];
