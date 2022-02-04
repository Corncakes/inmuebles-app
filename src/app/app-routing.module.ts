import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ResetComponent } from './components/users/reset/reset.component';
import { ListRoleComponent } from './components/users/roles/list-role/list-role.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { ListVisitasComponent } from './components/asistencia/visitas/list-visitas/list-visitas.component';
import { ListDesignacionesComponent } from './components/asistencia/designaciones/list-designaciones/list-designaciones.component';
import { ListPermisosComponent } from './components/users/permisos/list-permisos/list-permisos.component';
import { ListVinculacionesComponent } from './components/users/vinculaciones/list-vinculaciones/list-vinculaciones.component';
import { ListUserTypesComponent } from './components/users/user-types/list-user-types/list-user-types.component';
import { ListPrediosComponent } from './components/recorridos/predios/list-predios/list-predios.component';
import { ListProcesosComponent } from './components/recorridos/procesos/list-procesos/list-procesos.component';
import { ListDocumentosComponent } from './components/repositorio/documentos/list-documentos/list-documentos.component';
import { ReportesComponent } from './components/reportes/reportes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },

  // Asistencia routes
  { path: 'solicitud-de-visita', component: ListVisitasComponent },
  { path: 'designaciones', component: ListDesignacionesComponent },

  // Recorridos routes
  { path: 'predios', component: ListPrediosComponent },
  { path: 'procesos', component: ListProcesosComponent },

  // Repositorio routes
  { path: 'documentos', component: ListDocumentosComponent },

  // Reportes routes
  { path: 'reportes', component: ReportesComponent },

  // User routes
  { path: 'login', component: LoginComponent },

  // User routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reset-password', component: ResetComponent },
  { path: 'usuarios', component: ListUsersComponent },
  { path: 'roles', component: ListRoleComponent },
  { path: 'permisos', component: ListPermisosComponent },
  { path: 'vinculaciones', component: ListVinculacionesComponent },
  { path: 'tipos-de-usuario', component: ListUserTypesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }