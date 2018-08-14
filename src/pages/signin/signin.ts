import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';



@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    data = { nickname: "" };
    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.loginForm = fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
    }

    login() {
        firebase.auth().signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .then((data)=>{ 
            let userData = {
                'email': this.loginForm.get('email').value,
                'userId': data.uid
            };
            window.localStorage.setItem('userInfo', JSON.stringify(userData));
            this.navCtrl.setRoot(TabsPage);
        })
        .catch((error) => {
            alert('Wrong Credentials');
        });
    }

    signup() {
        this.navCtrl.setRoot(SignupPage);
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad SigninPage');
    }
}
