import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Venue } from '../../models/venue';

@Injectable()
export class Venues {
  venues: Venue[] = [];

  defaultItem: any = {
    name: "Liquid", 
    coverPhoto1: "assets/img/venueCoverPhoto/liquidCover.png", 
    coverPhoto2: "assets/img/venueCoverPhoto/orpheumCover.png", 
    coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
    numberOfEvents: '14',
    email: "hello@liquid.com", 
    phoneNumber: "14147586293", 
    address: "624 University Ave, Madison, WI 53715",
    flierImg: "assets/img/eventArt/dillonFrancis.jpg",
    coverPhoto: "assets/img/eventArt/coverPhoto/dillonCover.jpg",
    about: "Liquid night club is one of the most popular clubs in Madison, WI.",
    date: "12/15/17",
    venue: "Liquid",
    doors: "10pm",
    ages: "21+",
    emailAddress: "info@liquidmadison.com",
    presenter: "Live Nation",
    opener1: "Antics",
    opener2: "DaVilla",
    opener3: "",
    opener4: ""
  };


  constructor(public http: Http) {
    let venues = [
      { 
        name: "Liquid", 
        coverPhoto1: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/orpheumCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        numberOfEvents: '14',
        email: "hello@liquid.com", 
        phoneNumber: "14147586293", 
        address: "624 University Ave, Madison, WI 53715",
        flierImg: "assets/img/eventArt/dillonFrancis.jpg",
        coverPhoto: "assets/img/eventArt/coverPhoto/dillonCover.jpg",
        about: "Liquid night club is one of the most popular clubs in Madison, WI.",
        date: "12/15/17",
        venue: "Liquid",
        doors: "10pm",
        ages: "21+",
        emailAddress: "info@liquidmadison.com",
        presenter: "Live Nation",
        opener1: "Antics",
        opener2: "DaVilla",
        opener3: "",
        opener4: ""
      },
      { 
        name: "Orpheum Theater", 
        coverPhoto1: "assets/img/venueCoverPhoto/orpheumCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        numberOfEvents: '26',
        email: "hello@orpheum.com", 
        phoneNumber: "14147586293", 
        address: "624 University Ave, Madison, WI 53715"
      },
      { 
        name: "Civic Center", 
        coverPhoto1: "assets/img/venueCoverPhoto/civicCenterCover.png", 
        coverPhoto2: "assets/img/venueCoverPhoto/liquidCover.png", 
        coverPhoto3: "assets/img/venueCoverPhoto/orpheumCover.png", 
        numberOfEvents: '32',
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
