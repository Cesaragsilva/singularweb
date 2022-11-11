import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    ClientesComponent,
    ParceirosComponent,
    RelatoriosComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
