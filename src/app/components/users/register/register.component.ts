import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm = this.fb.group({
    id: [null],
    nombreDeUsuario: [null, Validators.required],
    action: ['new', Validators.required],
  });

  buttonText = 'Agregar';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      if(data.action === 'update') {
        this.userForm.patchValue({
          id: data.id,
          nombreDeUsuario: data.nombreDeUsuario,
          action: 'update',
        });
        this.buttonText = 'Actualizar';
      }
    }

  ngOnInit(): void {
  }

}