import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvailablePostPage');
  }

  choosePicture() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
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
    console.log(this.image);
    this.storage.set("image", this.image);
    this.navCtrl.pop();
  }

}