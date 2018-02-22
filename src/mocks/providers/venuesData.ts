import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { Venue } from '../../models/venues';

@Injectable()
export class Venues {
  venues: Venue[] = [];

  defaultItem: any = {
    name: "Liquid", 
    coverPhoto1: "assets/img/venueCoverPhoto/liquidCover.png", 
    coverPhoto2: "assets/img/venueCoverPhoto/orpheumCover.png", 
    coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
    email: "hello@liquid.com", 
    phoneNumber: "14147586293", 
    address: "624 University Ave, Madison, WI 53715"
  };


  constructor(public http: Http) {
    let venues = [
      { 
        name: "Liquid", 
        coverPhoto1: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/orpheumCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        email: "hello@liquid.com", 
        phoneNumber: "14147586293", 
        address: "624 University Ave, Madison, WI 53715"
      },
      { 
        name: "Orpheum Theater", 
        coverPhoto1: "assets/img/venueCoverPhoto/orpheumCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        email: "hello@orpheum.com", 
        phoneNumber: "14147586293", 
        address: "624 University Ave, Madison, WI 53715"
      },
      { 
        name: "Civic Center", 
        coverPhoto1: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/orpheumCover.png", 
        email: "hello@civiccenter.com", 
        phoneNumber: "14147586293", 
        address: "624 University Ave, Madison, WI 53715"
      }
    ];

    for (let item of venues) {
      this.venues.push(new Venue(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.venues;
    }

    return this.venues.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Venue) {
    this.venues.push(item);
  }

  delete(item: Venue) {
    this.venues.splice(this.venues.indexOf(item), 1);
  }
}
