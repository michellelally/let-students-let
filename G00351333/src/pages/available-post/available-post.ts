import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AreasProvider } from '../../providers/areas/areas';


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

  areas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private camera: Camera, private ap: AreasProvider) {
  }

  ionViewDidLoad() {
    this.ap.getAreasData().subscribe(data => {
      this.areas=data.areas;
    })    

  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
    });
  }

  choosePicture() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG //,
   //   mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
    });
  }

  saveDetails() {
    console.log(this.name);
    this.storage.set("name", this.name);
    console.log(this.phone);
    this.storage.set("phone", this.phone);
    console.log(this.type);
    this.storage.set("type", this.type);
    console.log(this.rooms);
    this.storage.set("rooms", this.rooms);
    console.log(this.price);
    this.storage.set("price", this.price);
    console.log(this.area);
    this.storage.set("area", this.area);
    console.log(this.stay);
    this.storage.set("stay", this.stay);
    console.log(this.monthsOrYears);
    this.storage.set("monthsOrYears", this.monthsOrYears);
    console.log(this.description);
    this.storage.set("description", this.description);

    
    this.storage.set("image", this.image);
    console.log(this.image);
    this.navCtrl.pop();
}

}