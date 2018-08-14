import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    data = { nickname: "" };
    registrationForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.registrationForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    
    registration() {
        firebase.auth().createUserWithEmailAndPassword(this.registrationForm.get('email').value, this.registrationForm.get('password').value)
            .then((data) => {
                let userData = {
                    'email': this.registrationForm.get('email').value,
                    'userId': data.uid
                };
                window.localStorage.setItem('userInfo', JSON.stringify(userData));
                this.navCtrl.setRoot(TabsPage);
            })
            .catch((error) => {
                alert('Sorry! Something went wrong');
            });
    }

}
