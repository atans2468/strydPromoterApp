import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemReviewPage } from '../pages/item-review/item-review';
import { VenuesPage } from '../pages/venues/venues';
import { VenueDetailsPage } from '../pages/venueDetails/venueDetails';
import { MarketingPage } from '../pages/marketing/marketing';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';

import { Items } from '../mocks/providers/items';
import { Venues } from '../mocks/providers/venuesData';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    ItemReviewPage,
    VenuesPage,
    VenueDetailsPage,
    MarketingPage,
    NotificationsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
    ListMasterPage,
    LoginPage,
    ItemReviewPage,
    VenuesPage,
    VenueDetailsPage,
    MarketingPage,
    NotificationsPage,
    ProfilePage
  ],
  providers: [
    Items,
    Venues,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
