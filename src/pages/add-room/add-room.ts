import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
    selector: 'page-add-room',
    templateUrl: 'add-room.html',
})
export class AddRoomPage {
    myRand: number;
    data = { id: 0, roomname: '' };
    ref = firebase.database().ref('chatrooms/')

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddRoomPage');
        this.myRand = this.random();
    }


    random(): number {
        let rand = Math.floor(1000 + Math.random() * 9000);
        return rand;
    }

    addRoom() {
        let newData = this.ref.push();
        newData.set({
            id: this.myRand,
            roomname: this.data.roomname
        });
        this.navCtrl.pop();
    }

}
