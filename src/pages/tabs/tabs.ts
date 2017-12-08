import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ListMasterPage } from '../list-master/list-master';
import { VenuesPage } from '../venues/venues';
import { MarketingPage } from '../marketing/marketing';
import { NotificationsPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListMasterPage;
  tab2Root = VenuesPage;
  tab3Root = MarketingPage;
  tab4Root = NotificationsPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
