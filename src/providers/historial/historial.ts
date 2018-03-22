
import { Injectable } from '@angular/core';

import {ScanData} from "../../model/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private _historial:any[] = [];

  constructor(private iab: InAppBrowser) {}

  agregar_historial(texto:string){
    let data = new ScanData(texto);
    this._historial.unshift(data);
    console.log(this._historial);
    this.abrir_scan(0);
  }

  abrir_scan(index:number){
    let scanData = this._historial[index];

    switch(scanData.tipo){
      case 'http':
        this.iab.create(scanData.info, '_system');
      break;
      default:
        console.error('Formato no soportado');
    }
  }

  cargar_historial(){
    return this._historial;
  }

}
