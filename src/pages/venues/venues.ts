import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { VenueDetailsPage } from '../venueDetails/venueDetails';

import { Venues } from '../../providers/providers';

import { Venue } from '../../models/venue';

import firebase from 'firebase';

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html'
})
export class VenuesPage {
  currentVenues: Venue[];

  venues: any[] = [];
  pageSize: number = 10;
  cursor: any;

  constructor(public navCtrl: NavController, public venue: Venues, public loadCtrl: LoadingController) {
    this.currentVenues = this.venue.query();
  }

  getPosts(){
    
    this.venues = [];

    let loading = this.loadCtrl.create({
      content: "Loading venues..."
    });

    loading.present();

    let query = firebase.firestore().collection("allVenues").orderBy("created", "desc").limit(this.pageSize);


    query.get().then((docs) => {

      docs.forEach((doc) => {
        this.venues.push(doc);
      })
      loading.dismiss();

      console.log(this.venues);

      this.cursor = this.venues[this.venues.length - 1];

    }).catch((err) => {
      console.log(err);
    })

  }

  
  //Navigate to the detail page for this item.
   
  openItem(venue: Venue) {
    this.navCtrl.push(VenueDetailsPage, {
      venue: venue
    });
  }

}
