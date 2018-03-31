import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MarketingDetailsPage } from '../marketingDetails/marketingDetails';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

@Component({
  selector: 'page-marketing',
  templateUrl: 'marketing.html'
})
export class MarketingPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items) {
    this.currentItems = this.items.query();
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(MarketingDetailsPage, {
      item: item
    });
  }

}
