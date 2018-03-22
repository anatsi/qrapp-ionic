import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';

import {HistorialProvider} from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              private toastCtrl: ToastController,
              private platform: Platform,
              private _historial: HistorialProvider) {

  }

  escanear(){
    console.log('escaneando...');

    if(!this.platform.is('cordova')){
      this._historial.agregar_historial('http://google.com');
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data: ', barcodeData);
     alert("We got a barcode\n" +
                "Result: " + barcodeData.text + "\n" +
                "Format: " + barcodeData.format + "\n" +
                "Cancelled: " + barcodeData.cancelled);

      if(barcodeData.cancelled == false && barcodeData.text != null){
        this._historial.agregar_historial(barcodeData.text);
      }
    }).catch(err => {
        this.error('Error: ' + err);
    });
  }

  error(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      position: 'top'
    });
    toast.present();
  }

}
