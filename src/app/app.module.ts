import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from "../pages/chat/chat";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

var config = {
  apiKey: "AIzaSyBB_bgDgh0pkn6R5PPckPVGdDM2Mk5f8xo",
  authDomain: "ionic-firechat-c5715.firebaseapp.com",
  databaseURL: "https://ionic-firechat-c5715.firebaseio.com",
  projectId: "ionic-firechat-c5715",
  storageBucket: "ionic-firechat-c5715.appspot.com",
  messagingSenderId: "418414853216"
};

@NgModule(
  {
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
