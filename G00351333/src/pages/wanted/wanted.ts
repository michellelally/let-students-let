import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WantedPostPage } from '../wanted-post/wanted-post';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the WantedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wanted',
  templateUrl: 'wanted.html',
})
export class WantedPage {
  name: string;
  phone: number;
  type: any;
  college: string;
  year: number;
  area: string;
  stay: number;
  monthsOrYears: string;
  description: string;
  image: any;

  areas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WantedPage');
  }

  openWantedPost() {
    this.navCtrl.push(WantedPostPage);
  }

  ionViewWillEnter() {
    this.storage.get("nameWanted").then((data) => {
      this.name = data;
    })
    this.storage.get("phoneWanted").then((data) => {
      this.phone = data;
    })
    this.storage.get("typeWanted").then((data) => {
      this.type = data;
    })
    this.storage.get("collegeWanted").then((data) => {
      this.college = data;
    })
    this.storage.get("yearWanted").then((data) => {
      this.year = data;
    })
    this.storage.get("areaWanted").then((data) => {
      this.area = data;
    })
    this.storage.get("stayWanted").then((data) => {
      this.stay = data;
    })
    this.storage.get("monthsOrYearsWanted").then((data) => {
      this.monthsOrYears = data;
    })
    this.storage.get("descriptionWanted").then((data) => {
      this.description = data;
    })
    this.storage.get("image").then((data) => {
      this.image = data;
    })
      .catch((err) => {
        console.log("Database retrieval error");
      })
  }
}
