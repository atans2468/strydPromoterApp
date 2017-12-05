import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ListMasterPage } from '../list-master/list-master';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListMasterPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
