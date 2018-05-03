import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { AvailablePostPage } from '../available-post/available-post';
import { Storage } from '@ionic/storage';


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
  type: any;
  rooms: number;
  price: number;
  area: string;
  stay: number;
  monthsOrYears: string;
  description: string;
  image: any;

  ads: any[] = [];

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
    this.storage.get("type").then((data) => {
      this.type = data;
    })
    this.storage.get("rooms").then((data) => {
      this.rooms = data;
    })
    this.storage.get("price").then((data) => {
      this.price = data;
    })
    this.storage.get("area").then((data) => {
      this.area = data;
    })
    this.storage.get("stay").then((data) => {
      this.stay = data;
    })
    this.storage.get("monthsOrYears").then((data) => {
      this.monthsOrYears = data;
    })
    this.storage.get("description").then((data) => {
      this.description = data;
    })
    this.storage.get("image").then((data) => {
      this.image = data;
    })
      .catch((err) => {
        console.log("Database retrieval error");
      })
      this.storage.clear();

  }

}
