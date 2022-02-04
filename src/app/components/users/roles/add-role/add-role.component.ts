import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  roleForm = this.fb.group({
    id: [null],
    nombre: [null, Validators.required],
    action: ['new', Validators.required],
  });

  buttonText = 'Agregar';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      if(data.action === 'update') {
        this.roleForm.patchValue({
          id: data.id,
          nombre: data.nombre,
          action: 'update',
        });
        this.buttonText = 'Actualizar';
      }
    }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}