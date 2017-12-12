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

  //accordion
  tiers = [
    { name: "Consumer Information"},
    { name: "Payment Information"}
  ];

  shownConsumerGroup = null;
  shownPaymentGroup = null;

  toggleConsumerGroup(group) {
    if (this.isConsumerGroupShown(group)) {
        this.shownConsumerGroup = null;
    } else {
        this.shownConsumerGroup = group;
    }
  };
  isConsumerGroupShown(group) {
      return this.shownConsumerGroup === group;
  };

  togglePaymentGroup(group) {
    if (this.isPaymentGroupShown(group)) {
        this.shownPaymentGroup = null;
    } else {
        this.shownPaymentGroup = group;
    }
  };
  isPaymentGroupShown(group) {
      return this.shownPaymentGroup === group;
  };
  //end of accordion

  
  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }


   /**
   * process purchase and route to events page
   */
  finishSale() {
    this.navCtrl.popToRoot();
  }
}