import { Component, OnInit, ViewChild } from '@angular/core';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AddRoleComponent } from '../add-role/add-role.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'actions'];
  dataSource: MatTableDataSource<Role>;
  roles: Role[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(
    private dataApi: UserService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.getListRoles();
  }

  getListRoles(): void {
    this.dataApi.getAllRoles().subscribe(
      roles => { 
        this.dataSource = new MatTableDataSource(roles);
        this.dataSource.paginator = this.paginator;
      }
    );  
  }

  openRolesDialog(id?: any, nombre?: any, action?: any): void {
    const dialogRef = this.dialog.open(AddRoleComponent, {
      data: {
        action: action,
        id: id,
        nombre: nombre
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log('The dialog was closed');
        console.log(JSON.stringify(result));
        if (result.action === 'new') {
          let role = new Role(0,result.nombre);
          console.log(JSON.stringify(role));
          this.userService.addRole(role)
            .subscribe(result => {
              console.log(JSON.stringify(result));
              window.location.reload();
            });
        }
        if (result.action === 'update') {
          let role = new Role(result.id, result.nombre);
          console.log('Editando');
          console.log(JSON.stringify(role));
          this.userService.updateRole(role)
            .subscribe(result => {
              console.log(JSON.stringify(result));
              window.location.reload();
            });;
          //this.officeService.editOffice(lastOffice, result);
        }
        //this.offices = this.officeService.getOffices();
      },
    );
  }

  deleteRole(role: Role): void {
    this.userService.deleteRole(role.id)
      .subscribe(result => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/roles'])); 
      });
  }
}
