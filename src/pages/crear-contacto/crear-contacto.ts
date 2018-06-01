import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from 'qrcode';



@IonicPage()
@Component({
  selector: 'page-crear-contacto',
  templateUrl: 'crear-contacto.html',
})
export class CrearContactoPage {
  datos:any[]=[];
valores:any[]=[];
  qrData = null;
  activar=true;
  nom=null;
  num=null;
  createdCode = null;
  scannedCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private contacts:Contacts,
public viewCtrl: ViewController,private barcodeScanner: BarcodeScanner) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearContactoPage');
  }
 
  createCode() {
    this.createdCode = this.nom+","+this.num;
    this.activar=true;
  }
 
  //Escandeo de codigo qr y llama al metodo para crear el contacto con los daros leidos  
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.crearContacto();
      
    }, (err) => {
        console.log('Error: ', err);
    });
  }
 



  /**
   * Funsion para agregar un nuevo contacto a la lista de contactos del telefono.
   */
  crearContacto(){
 



}
