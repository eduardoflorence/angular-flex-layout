import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { Exemplo1Component } from './componentes/exemplo1/exemplo1.component';
import { Exemplo2Component } from './componentes/exemplo2/exemplo2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'exemplo1', component: Exemplo1Component },
  { path: 'exemplo2', component: Exemplo2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
