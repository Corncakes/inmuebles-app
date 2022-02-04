import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Custom Services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { PrediosMarkerService } from './services/predios-marker.service';

//Custom Interceptors
import { AuthInterceptor } from './helpers/auth.interceptor';

//Angular Material Components
import { MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatListModule,
  MatRadioModule,
  MatMenuModule,
  MatChipsModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatTableModule, 
  MatPaginatorModule,
  MatTabsModule,
  MatTooltipModule,
  MatSlideToggleModule } from '@angular/material';

//Custom Components
import { ListRoleComponent } from './components/users/roles/list-role/list-role.component';
import { ResetComponent } from './components/users/reset/reset.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { AddRoleComponent } from './components/users/roles/add-role/add-role.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddVisitasComponent } from './components/asistencia/visitas/add-visitas/add-visitas.component';
import { ListVisitasComponent } from './components/asistencia/visitas/list-visitas/list-visitas.component';
import { AddDesignacionesComponent } from './components/asistencia/designaciones/add-designaciones/add-designaciones.component';
import { ListDesignacionesComponent } from './components/asistencia/designaciones/list-designaciones/list-designaciones.component';
import { AddPrediosComponent } from './components/recorridos/predios/add-predios/add-predios.component';
import { ListPrediosComponent } from './components/recorridos/predios/list-predios/list-predios.component';
import { ListProcesosComponent } from './components/recorridos/procesos/list-procesos/list-procesos.component';
import { AddProcesosComponent } from './components/recorridos/procesos/add-procesos/add-procesos.component';
import { AddDocumentosComponent } from './components/repositorio/documentos/add-documentos/add-documentos.component';
import { ListDocumentosComponent } from './components/repositorio/documentos/list-documentos/list-documentos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ListPermisosComponent } from './components/users/permisos/list-permisos/list-permisos.component';
import { AddPermisosComponent } from './components/users/permisos/add-permisos/add-permisos.component';
import { AddVinculacionesComponent } from './components/users/vinculaciones/add-vinculaciones/add-vinculaciones.component';
import { ListVinculacionesComponent } from './components/users/vinculaciones/list-vinculaciones/list-vinculaciones.component';
import { ListUserTypesComponent } from './components/users/user-types/list-user-types/list-user-types.component';
import { AddUserTypesComponent } from './components/users/user-types/add-user-types/add-user-types.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRoleComponent,
    ResetComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    AddRoleComponent,
    DashboardComponent,
    NavComponent,
    ListUsersComponent,
    AddVisitasComponent,
    ListVisitasComponent,
    AddDesignacionesComponent,
    ListDesignacionesComponent,
    AddPrediosComponent,
    ListPrediosComponent,
    ListProcesosComponent,
    AddProcesosComponent,
    AddDocumentosComponent,
    ListDocumentosComponent,
    ReportesComponent,
    ListPermisosComponent,
    AddPermisosComponent,
    AddVinculacionesComponent,
    ListVinculacionesComponent,
    ListUserTypesComponent,
    AddUserTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatChipsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSlideToggleModule
  ],
  entryComponents: [
    AddRoleComponent,
    AddPrediosComponent,
    RegisterComponent
  ],
  providers: [
    UserService,
    AuthService,
    AuthInterceptor,
    PrediosMarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
