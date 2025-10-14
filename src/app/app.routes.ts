import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { header } from './shared/componentes/header/header';



export const routes: Routes =[
{path: 'header', component: header},
{path: 'Login', component: Login},

{path: '**', redirectTo: 'header', pathMatch: 'full'}
];
