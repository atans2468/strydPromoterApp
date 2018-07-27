import { Component } from '@angular/core';
import {Platform, ViewController, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { ListMasterPage } from '../list-master/list-master';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-item-review',
  templateUrl: 'item-review.html'
})

export class ItemReviewPage {
  
  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  //action sheet function
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share this event',
      buttons: [
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  //end of action sheet function


  //date picker for DoB
  public event = {
    month: ''
  }
  //date picker for card expiration
  public card = {
    expiration: ''
  }


   /**
   * process purchase and route to events page
   */
  presentPaymentToast() {
    let paymentToast = this.toastCtrl.create({
      message: 'Transaction successfully completed',
      duration: 3000,
      position: 'top'
    });
    paymentToast.present();
  };
  
  finishSale() {
    this.navCtrl.popToRoot();
  }
}