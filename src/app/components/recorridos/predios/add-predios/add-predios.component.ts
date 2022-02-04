import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-predios',
  templateUrl: './add-predios.component.html',
  styleUrls: ['./add-predios.component.scss']
})
export class AddPrediosComponent implements OnInit {

  prediosForm = this.fb.group({
    nombrePropietario: [null, Validators.required],
    apellidosPropietario: [null, Validators.required],
    telefono: [null, Validators.required],
    direccion: [null, Validators.required],
    latitud: [null, Validators.required],
    longitud: [null, Validators.required],
    action: ['new', Validators.required],
  });

  buttonText = 'Agregar';

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPrediosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
      if(data.action === 'update') {
        this.prediosForm.patchValue({
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
