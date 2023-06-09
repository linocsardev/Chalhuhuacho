import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: '**', component: NopagefoundComponent}

  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting
  //path: '/medicos' MedicosRouting
  //path: '/compras' ComprasRouting
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
