import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  /**
   * login
  : void  */
  public login() : void {    
    this.navCtrl.setRoot(TabsPage);
  }

}
