import { Component } from '@angular/core';

import {HistorialProvider} from "../../providers/historial/historial";
import {ScanData} from "../../model/scan-data.model";


@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial:ScanData[] = [];

  constructor(private _historial : HistorialProvider) {
  }

  ionViewDidLoad() {
    this.historial = this._historial.cargar_historial();
  }

  abrir(index:number){
    this._historial.abrir_scan(index);
  }

}
