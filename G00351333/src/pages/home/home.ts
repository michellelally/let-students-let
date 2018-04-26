import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { WantedPage } from '../wanted/wanted';
import { AvailablePage } from '../available/available';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openAvailable(){
    this.navCtrl.push(AvailablePage);
  }

  openWanted(){
    this.navCtrl.push(WantedPage);
  }

}
