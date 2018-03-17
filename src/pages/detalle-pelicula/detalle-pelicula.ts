import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
    @Component({
        selector: 'page-detalle-pelicula',
        templateUrl: 'detalle-pelicula.html' })
        export class DetallePeliculaPage {
        item:any;
        constructor(public navCtrl: NavController, public params: NavParams) {
    this.item= params.get('items');
  }
      ionViewDidLoad() {
        console.log('ionViewDidLoad DetallePeliculaPage');
    }
}