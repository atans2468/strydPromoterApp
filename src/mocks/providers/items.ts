import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Liquid",
    "flierImg": "assets/img/speakers/bear.jpg",
    "about": "Liquid night club is one of the most popular clubs in Madison, WI.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Dillon Francis",
        "flierImg": "assets/img/eventArt/dillonFrancis.jpg",
        "coverPhoto": "assets/img/eventArt/coverPhoto/dillonCover.jpg",
        "about": "Liquid night club is one of the most popular clubs in Madison, WI.",
        "date": "12/15/17",
        "venue": "Liquid",
        "doors": "10pm",
        "ages": "21+",
        "address": "624 University Ave, Madison, WI 53715",
        "phoneNumber": "(608) 257-1122",
        "emailAddress": "info@liquidmadison.com",
        "presenter": "Live Nation",
        "opener1": "Antics",
        "opener2": "DaVilla",
        "opener3": "",
        "opener4": "",
        "tier1" : {
          "name": "General Admission", 
          "location": "Upper Level", 
          "price": "25.50"
        },
        "tier2" : {
          "name": "General Admission", 
          "location": "Main Floor", 
          "price": "30.50"
        },
        "feePercentage" : ".175"
      },
      {
        "name": "Beyonce",
        "flierImg": "assets/img/eventArt/beyonceProf.jpg",
        "coverPhoto": "assets/img/eventArt/beyonceProf.jpg",
        "about": "Liquid night club is one of the most popular clubs in Madison, WI.",
        "date": "12/16/17",
        "venue": "Civic Center",
        "doors": "8:30pm",
        "ages": "All Ages",
        "address": "624 University Ave, Madison, WI 53715",
        "phoneNumber": "(608) 257-1122",
        "emailAddress": "info@liquidmadison.com",
      },
      {
        "name": "Zhu",
        "flierImg": "assets/img/eventArt/zhuProf.jpg",
        "coverPhoto": "assets/img/eventArt/zhuProf.jpg",
        "about": "Liquid night club is one of the most popular clubs in Madison, WI.",
        "date": "12/22/17",
        "venue": "Orpheum Theater",
        "doors": "10:30pm",
        "ages": "18+",
        "address": "624 University Ave, Madison, WI 53715",
        "phoneNumber": "(608) 257-1122",
        "emailAddress": "info@liquidmadison.com",
      },
      {
        "name": "Zhu",
        "flierImg": "assets/img/eventArt/zhuProf.jpg",
        "coverPhoto": "assets/img/eventArt/zhuProf.jpg",
        "about": "Liquid night club is one of the most popular clubs in Madison, WI.",
        "date": "12/23/17",
        "venue": "Orpheum Theater",
        "doors": "10:30pm",
        "ages": "18+",
        "address": "624 University Ave, Madison, WI 53715",
        "phoneNumber": "(608) 257-1122",
        "emailAddress": "info@liquidmadison.com",
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
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

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
