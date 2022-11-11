import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'parceiros', component: ParceirosComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'configuracoes', component: ConfiguracoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
