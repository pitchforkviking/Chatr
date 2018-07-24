import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(
    public appCtrl: App,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  /**
   * logout
  : void  */
  public logout() : void {
    this.navCtrl.setRoot(WelcomePage);
    this.appCtrl.getRootNav().setRoot(WelcomePage);
  }

}
