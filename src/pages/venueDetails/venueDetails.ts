import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-venueDetails',
  templateUrl: 'venueDetails.html'
})
export class VenueDetailsPage {

  constructor(public navCtrl: NavController) {

  }

  venueDetails = [
    { name: "Liquid", coverPhoto1: "assets/img/venueCoverPhoto/liquidCover.png", coverPhoto2: "assets/img/venueCoverPhoto/orpheumCover.png", coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", email: "hello@liquid.com", phoneNumber: "14147586293", address: "624 University Ave, Madison, WI 53715"},
    { name: "Orpheum Theater", coverPhoto1: "assets/img/venueCoverPhoto/orpheumCover.png", coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", email: "hello@orpheum.com", phoneNumber: "14147586293", address: "624 University Ave, Madison, WI 53715"},
    { name: "Civic Center", coverPhoto1: "assets/img/venueCoverPhoto/civicCenterCover.png", coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", coverPhoto3: "assets/img/venueCoverPhoto/orpheumCover.png", email: "hello@civiccenter.com", phoneNumber: "14147586293", address: "624 University Ave, Madison, WI 53715"}
  ];

  /*
  Navigate to the detail page for this item.
   
  openItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  */

}
