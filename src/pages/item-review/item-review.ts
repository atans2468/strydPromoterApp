import { Component } from '@angular/core';
import { ModalController, Platform, ViewController, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { ListMasterPage } from '../list-master/list-master';

@Component({
  selector: 'page-item-review',
  templateUrl: 'item-review.html'
})
export class ItemReviewPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public modalCtrl: ModalController) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  openModal(characterNum) {
    
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content style="background-color: rgb(51,51,51);">
  
  <ion-row style="color: #fff;">
    <ion-col col-12 style="text-align: center; padding-left: 15px; padding-right: 15px;">
      <h1>Thank You For Your Purchase</h1>
      <p>Please remind our guest that they can review their purchase, view their tickets, and control their clubbing experience all through our “Consumer App” which is available on all major app stores.</p>
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col col-12 style="text-align: center;">
      <button ion-button color="secondary" round style="width: 70%;" (click)="goToMyPage()"><b>Select</b></button>
    </ion-col>
  </ion-row>

</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    private nav: NavController,
    navParams: NavParams) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
    ];
    this.character = characters[this.params.get('charNum')];
  }

  goToMyPage() {
    // go to the MyPage component
    this.nav.setRoot(ListMasterPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}