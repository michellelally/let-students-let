import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WantedPostPage } from './wanted-post';

@NgModule({
  declarations: [
    WantedPostPage,
  ],
  imports: [
    IonicPageModule.forChild(WantedPostPage),
  ],
})
export class WantedPostPageModule {}
