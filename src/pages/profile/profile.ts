import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { ItemReviewPage } from '../item-review/item-review';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public actionSheetCtrl: ActionSheetController) {
    this.item = navParams.get('item') || items.defaultItem;
  }

}
