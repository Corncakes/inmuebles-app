import { Component, OnInit, ViewChild } from '@angular/core';
import { Role } from 'src/app/models/role';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombreDeUsuario', 'actions'];
  dataSource: MatTableDataSource<User>;
  roles: Role[] = [];
  users: User[] = [];

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

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(): void {
    this.dataApi.getAllUsers().subscribe(
      users => { 
        this.dataSource = new MatTableDataSource(users);
        this.dataSource.paginator = this.paginator;
      }
    );  
  }

  openUsersDialog(id?: any, nombreDeUsuario?: any, action?: any): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '650px',
      data: {
        action: action,
        id: id,
        nombreDeUsuario: nombreDeUsuario
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        console.log('The dialog was closed');
        console.log(JSON.stringify(result));
        if (result.action === 'new') {
          let user = new User(0,result.nombreDeUsuario);
          console.log(JSON.stringify(user));
          this.userService.addUser(user)
            .subscribe(result => {
              console.log(JSON.stringify(result));
              window.location.reload();
            });
        }
        if (result.action === 'update') {
          let user = new User(result.id, result.nombreDeUsuario);
          console.log('Editando');
          console.log(JSON.stringify(user));
          this.userService.updateUser(user)
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

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(result => {
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/usuarios'])); 
      });
  }

}
