import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { Exemplo1Component } from './componentes/exemplo1/exemplo1.component';
import { Exemplo2Component } from './componentes/exemplo2/exemplo2.component';
import { Exemplo3Component } from './componentes/exemplo3/exemplo3.component';
import { Exemplo4Component } from './componentes/exemplo4/exemplo4.component';
import { Exemplo5Component } from './componentes/exemplo5/exemplo5.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Exemplo1Component,
    Exemplo2Component,
    Exemplo3Component,
    Exemplo4Component,
    Exemplo5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
