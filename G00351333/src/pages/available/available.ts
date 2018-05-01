import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { AvailablePostPage } from '../available-post/available-post';
import { Storage } from '@ionic/storage';

import { Camera, CameraOptions } from '@ionic-native/camera';


/**
 * Generated class for the AvailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-available',
  templateUrl: 'available.html',
})
export class AvailablePage {
  name: string;
  phone: number;
  image: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablePage');
  }

  openAvailablePost() {
    this.navCtrl.push(AvailablePostPage);
  }

  ionViewWillEnter() {
    this.storage.get("name").then((data) => {
      this.name = data;
    })
    this.storage.get("phone").then((data) => {
      this.phone = data;
    })
    this.storage.get("image").then((data) => {
      this.image = data;
    })
      .catch((err) => {
        console.log("Database retrieval error");
      })
  }

}
