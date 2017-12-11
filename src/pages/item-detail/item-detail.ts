import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemReviewPage } from '../item-review/item-review';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  

  //accordion
  tiers = [
    { name: "General Admission", location: "Main Floor", price: "25.50"},
    { name: "General Admission", location: "Upper Deck", price: "30.50"},
    { name: "VIP Admission", location: "Opera Box", price: "70.25"}
  ];

  shownGroup = 0;

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };
  //end of accordion

  //counter
  public counter : number = 0;
  
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    this.counter -= 1;
  }
  //end of counter
  


  //retrieve data from items.ts carried over from list-master
  item: any;
  //data retrieved
  
  
  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemReviewPage, {
      item: item
    });
  }

}
