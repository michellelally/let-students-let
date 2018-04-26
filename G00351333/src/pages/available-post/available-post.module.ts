import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablePostPage } from './available-post';

@NgModule({
  declarations: [
    AvailablePostPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailablePostPage),
  ],
})
export class AvailablePostPageModule {}
