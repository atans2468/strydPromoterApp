import { Component } from '@angular/core';
import {Platform, ViewController, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

import { ListMasterPage } from '../list-master/list-master';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-item-review',
  templateUrl: 'item-review.html'
})

export class ItemReviewPage {
  
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }
}