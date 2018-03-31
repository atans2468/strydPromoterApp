import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public alertCtrl: AlertController) {
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
            console.log('Post clicked');
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
