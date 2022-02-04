import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { AddPrediosComponent } from '../add-predios/add-predios.component';
import { PrediosMarkerService } from 'src/app/services/predios-marker.service';

export interface UserData {
  id: string;
  tipologia: string;
  direccion: string;
  intervenciones: string;
}

/** Constants used to fill up our data base. */
const INTERVENCIONES: string[] = [
  '2', '1', '3'
];
const DIRECCIONES: string[] = [
  'Mz 10 Lt4', 'Mz 15 Lt1', 'Mz 2 Lt8'
];
const TIPOLOGIA: string[] = [
  'Históricos Residenciales', 'Históricos Especiales', 'Contemporáneos'
];

@Component({
  selector: 'app-list-predios',
  templateUrl: './list-predios.component.html',
  styleUrls: ['./list-predios.component.scss']
})
export class ListPrediosComponent implements AfterViewInit {

  private map: any;

  private initMap(): void {
    this.map = new L.Map('map', {
      center: [ 10.422529, -75.5259465 ],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    var marker = L.marker([10.423145,-75.547207]).addTo(this.map);
    var marker = L.marker([10.424660, -75.552559]).addTo(this.map);
    var marker = L.marker([10.423900, -75.551744]).addTo(this.map);
    var marker = L.marker([10.427583, -75.547849]).addTo(this.map);
    var marker = L.marker([10.421009, -75.544856]).addTo(this.map);

  }

  displayedColumns: string[] = ['id', 'tipologia', 'direccion', 'intervenciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private makerPrediosMarker: PrediosMarkerService
  ) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewPredio(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.initMap();
    this.makerPrediosMarker.makePrediosMarkers(this.map);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openPrediosDialog(action?: any): void {
    const dialogRef = this.dialog.open(AddPrediosComponent, {
      data: {
        action: action,
      }
    });
  
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('The dialog was closed');
        console.log(JSON.stringify(result));
        if (result.action === 'new') {
          
        }
        if (result.action === 'update') {
          
        }
      },
    );
  }
  
}

/** Builds and returns a new predio. */
function createNewPredio(id: number): UserData {
  return {
    id: id.toString(),
    tipologia: TIPOLOGIA[Math.round(Math.random() * (TIPOLOGIA.length - 1))],
    direccion: DIRECCIONES[Math.round(Math.random() * (DIRECCIONES.length - 1))],
    intervenciones: INTERVENCIONES[Math.round(Math.random() * (INTERVENCIONES.length - 1))]
  };
}