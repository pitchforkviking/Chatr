import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  
  /**
   * login
    : void*/
  public login() : void {
    this.navCtrl.setRoot(LoginPage);
  }

  /**
   * register
  : void  */
  public register() : void {
    this.navCtrl.setRoot(RegisterPage);
  }
  
}

