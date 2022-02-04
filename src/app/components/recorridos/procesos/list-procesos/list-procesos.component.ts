import { Component, AfterViewInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

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
  selector: 'app-list-procesos',
  templateUrl: './list-procesos.component.html',
  styleUrls: ['./list-procesos.component.scss']
})
export class ListProcesosComponent implements AfterViewInit {

  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 10.4246793, -75.5480076 ],
      zoom: 16.20
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  displayedColumns: string[] = ['id', 'tipologia', 'direccion', 'intervenciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewProceso(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.initMap();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new proceso. */
function createNewProceso(id: number): UserData {
  return {
    id: id.toString(),
    tipologia: TIPOLOGIA[Math.round(Math.random() * (TIPOLOGIA.length - 1))],
    direccion: DIRECCIONES[Math.round(Math.random() * (DIRECCIONES.length - 1))],
    intervenciones: INTERVENCIONES[Math.round(Math.random() * (INTERVENCIONES.length - 1))]
  };
}