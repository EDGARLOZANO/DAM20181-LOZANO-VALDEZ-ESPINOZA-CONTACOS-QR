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
    let contact: Contact = this.contacts.create();
    let avatar ="/assets/imgs/logo.png";

    this.valores=this.scannedCode.split(',');
    contact.displayName =this.datos['nombre']  =this.valores[0];
    contact.phoneNumbers = [new ContactField(this.datos['tiponumero']="Movil",
    this.datos['numero']=this.valores[1])];
    contact.photos = [new ContactField('url',avatar,false)]
    contact.save().then(
      () => { 
        console.log('Contact Guardado!', contact)
        this.dismiss({estado:true,contacto:contact});
      },
      (error: any) => {
        console.error('Error al guardar el contacto.', error)
        this.dismiss({estado:false});
      }
    );
  }
// para cancelar la creacion de contacto
  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }



}
