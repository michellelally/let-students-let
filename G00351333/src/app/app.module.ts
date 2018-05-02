import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WantedPage } from '../pages/wanted/wanted';
import { WantedPostPage } from '../pages/wanted-post/wanted-post';
import { AvailablePage } from '../pages/available/available';
import { AvailablePostPage } from '../pages/available-post/available-post';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AreasProvider } from '../providers/areas/areas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AvailablePage,
    WantedPage,
    AvailablePostPage,
    WantedPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AvailablePage,
    WantedPage,
    AvailablePostPage,
    WantedPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AreasProvider,
  ]
})
export class AppModule {}
