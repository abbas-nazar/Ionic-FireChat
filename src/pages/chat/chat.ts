import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username='';
  message='';
  subscription;
  messages : object[]=[];
  constructor(public db:AngularFireDatabase ,public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
    this.username=this.navParams.get('username');
    this.subscription=this.db.list('/chat').subscribe(data =>
    {
      this.messages=data;
    });
  }

  sendMessage()
{
  this.db.list('/chat').push(
    {
      username: this.username,
      message :this.message
    }
  ).then(()=>
    {

    }
  ).catch(()=>
    {

    }
  );
  this.message=' ';
}

ionViewWillLeave()
{
  console.log('user is about to go');
  this.subscription.unsubscribe();
  this.db.list('/chat').push(
    {
      specialMessage:true,
      message:`${this.username} has left the room`
    }
  )
}
ionViewDidLoad()
{
  this.db.list('/chat').push(
    {
      specialMessage:true,
      message:`${this.username} has joined the room`
    }
  )
};

}
