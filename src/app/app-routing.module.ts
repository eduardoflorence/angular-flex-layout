import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { Exemplo1Component } from './componentes/exemplo1/exemplo1.component';
import { Exemplo2Component } from './componentes/exemplo2/exemplo2.component';
import { Exemplo3Component } from './componentes/exemplo3/exemplo3.component';
import { Exemplo4Component } from './componentes/exemplo4/exemplo4.component';
import { Exemplo5Component } from './componentes/exemplo5/exemplo5.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'principal' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'exemplo1', component: Exemplo1Component },
  { path: 'exemplo2', component: Exemplo2Component },
  { path: 'exemplo3', component: Exemplo3Component },
  { path: 'exemplo4', component: Exemplo4Component },
  { path: 'exemplo5', component: Exemplo5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
