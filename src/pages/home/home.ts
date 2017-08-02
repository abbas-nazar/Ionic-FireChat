import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import { ChatPage } from "../chat/chat";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage
{
  username ="";
  constructor(private alertCtrl : AlertController,public navCtrl: NavController) {

  }

  alert(title,message)
  {
    let alertbox = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alertbox.present();
  }

  LoginUser()
  {
     if(/^[a-zA-Z0-9]+$/.test(this.username))
    {
      this.navCtrl.push(ChatPage,
        { username:this.username
        })
    }
    else
    {
      this.alert('Error','Invalid Username');
    }
  }

}
