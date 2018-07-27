import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

@Component({
  selector: 'page-socialPost',
  templateUrl: 'socialPost.html'
})
export class socialPostPage {
  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  post() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to post?',
      buttons: [
        {
          text: 'Go Back',
          handler: () => {
            console.log('Go Back clicked');
          }
        },
        {
          text: 'Post',
          handler: () => {

            this.navCtrl.pop();
            
            //this is code for the demo version of the app
            //this automatically present a success toast
            //in real app this will need to be changed to trigger
            //after successful addition of route to that user
            let socialToast = this.toastCtrl.create({
              message: 'Post successfully completed',
              duration: 3000,
              position: 'top'
            });
            socialToast.present();
          }
        }
      ]
    });
    confirm.present();

  }

}
