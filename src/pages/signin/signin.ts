import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    data = { nickname: "" };
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SigninPage');
    }

    enterNickname() {
        window.localStorage.setItem('userName', this.data.nickname);
        this.navCtrl.setRoot(TabsPage);
    }
}
