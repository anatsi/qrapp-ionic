import { Component } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) {

  }

  escanear(){
    console.log('escaneando...');

    this.barcodeScanner.scan().then(barcodeData => {
     console.log('Barcode data: ', barcodeData);
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
