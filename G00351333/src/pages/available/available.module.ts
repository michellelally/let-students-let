import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailablePage } from './available';

@NgModule({
  declarations: [
    AvailablePage,
  ],
  imports: [
    IonicPageModule.forChild(AvailablePage),
  ],
})
export class AvailablePageModule {}
