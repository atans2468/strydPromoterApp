import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VenueDetailsPage } from '../venueDetails/venueDetails';

import { Venues } from '../../providers/providers';

import { Venue } from '../../models/venues';

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html'
})
export class VenuesPage {
  currentVenues: Venue[];

  constructor(public navCtrl: NavController, public venue: Venues) {
    this.currentVenues = this.venue.query();
  }

  
  //Navigate to the detail page for this item.
   
  openItem(item) {
    this.navCtrl.push(VenueDetailsPage, {
      item: item
    });
  }

}
