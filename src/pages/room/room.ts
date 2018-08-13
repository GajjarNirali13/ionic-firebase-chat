import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { HomePage } from '../home/home';
import * as firebase from 'firebase';

@IonicPage()
@Component({
    selector: 'page-room',
    templateUrl: 'room.html',
})
export class RoomPage {
    rooms = [];
    ref = firebase.database().ref('chatrooms/');

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        //getting the list of the chatrooms
        this.ref.on('value', resp => {
            this.rooms = [];
            this.rooms = snapshotToArray(resp);
        });
    }

    addRoom() {
        this.navCtrl.push(AddRoomPage);
    }

    joinRoom(room) {
        //go to the chat page
        //with room-id as key
        //nickname of the logged in user
        this.navCtrl.setRoot(HomePage, {
            key: room.key,
            nickname: window.localStorage.getItem('userName')
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RoomPage');
    }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};
