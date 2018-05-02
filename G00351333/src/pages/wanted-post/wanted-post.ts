import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AreasProvider } from '../../providers/areas/areas';


/**
 * Generated class for the WantedPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wanted-post',
  templateUrl: 'wanted-post.html',
})
export class WantedPostPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private ap: AreasProvider) {
  }

  ionViewDidLoad() {
    this.ap.getAreasData().subscribe(data => {
      this.areas=data.areas;
    })
  }

  saveDetails() {
    console.log(this.name);
    this.storage.set("nameWanted", this.name);
    console.log(this.phone);
    this.storage.set("phoneWanted", this.phone);
    console.log(this.type);
    this.storage.set("typeWanted", this.type);
    console.log(this.college);
    this.storage.set("collegeWanted", this.type);
    console.log(this.year);
    this.storage.set("yearWanted", this.type);
    console.log(this.area);
    this.storage.set("areaWanted", this.area);
    console.log(this.stay);
    this.storage.set("stayWanted", this.stay);
    console.log(this.monthsOrYears);
    this.storage.set("monthsOrYearsWanted", this.monthsOrYears);
    console.log(this.description);
    this.storage.set("descriptionWanted", this.description);
    this.navCtrl.pop();
  }

}
