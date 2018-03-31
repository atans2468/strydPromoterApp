import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

import { socialPostPage } from '../socialPost/socialPost';

@Component({
  selector: 'page-marketingDetails',
  templateUrl: 'marketingDetails.html'
})
export class MarketingDetailsPage {
  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  postPage (item: Item) {
    this.navCtrl.push(socialPostPage, {
      item: item
    });
  };

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Route successfully accepted',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  };

  acceptRoute() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to accept this route?',
      buttons: [
        {
          text: 'Go Back',
          handler: () => {
            console.log('Go Back clicked');
          }
        },
        {
          text: 'Accept',
          handler: () => {
            console.log('Post clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
