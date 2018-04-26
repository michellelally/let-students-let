import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AvailablePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-available-post',
  templateUrl: 'available-post.html',
})
export class AvailablePostPage {
name:string;
phone:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablePostPage');
  }

  saveDetails(){
    console.log(this.name);
    this.storage.set("name", this.name);
    console.log(this.phone);
    this.storage.set("phone", this.phone);
    this.navCtrl.pop();
  }
  
}
