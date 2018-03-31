import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Pro } from '@ionic/pro';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ListMasterPage } from '../pages/list-master/list-master';
import { ListPage } from '../pages/list/list';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemReviewPage } from '../pages/item-review/item-review';
import { VenuesPage } from '../pages/venues/venues';
import { VenueDetailsPage } from '../pages/venueDetails/venueDetails';
import { MarketingPage } from '../pages/marketing/marketing';
import { MarketingDetailsPage } from '../pages/marketingDetails/marketingDetails';
import { socialPostPage } from '../pages/socialPost/socialPost';
import { NotificationsPage } from '../pages/notifications/notifications';
import { ProfilePage } from '../pages/profile/profile';

import { Items } from '../mocks/providers/items';
import { Venues } from '../mocks/providers/venues';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

Pro.init('04dea42c', {
  appVersion: '0.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailPage,
    ListMasterPage,
    ListPage,
    LoginPage,
    ItemReviewPage,
    VenuesPage,
    VenueDetailsPage,
    MarketingPage,
    MarketingDetailsPage,
    socialPostPage,
    NotificationsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      //Tabs config
      tabsHideOnSubPages: true,
    })
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
    ListPage,
    LoginPage,
    ItemReviewPage,
    VenuesPage,
    VenueDetailsPage,
    MarketingPage,
    MarketingDetailsPage,
    socialPostPage,
    NotificationsPage,
    ProfilePage
  ],
  providers: [
    Items,
    Venues,
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
