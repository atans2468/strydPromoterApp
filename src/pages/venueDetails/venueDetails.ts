import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Venues } from '../../providers/providers';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-venueDetails',
  templateUrl: 'venueDetails.html'
})
export class VenueDetailsPage {

  //retrieve data from venues.ts and items.tx carried over from list-master
  venues: any;
  currentItems: Item[];
  //data retrieved

  constructor(public navCtrl: NavController, navParams: NavParams, public items: Items, venues: Venues) {
    this.currentItems = this.items.query();
    this.venues = navParams.get('venues') || venues.defaultItem;
  }

  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
