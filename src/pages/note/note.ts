import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { ManageNotePage } from '../manage-note/manage-note';

@IonicPage()
@Component({
    selector: 'page-note',
    templateUrl: 'note.html',
})
export class NotePage {
    notes = [];
    ref = firebase.database().ref('notes/');
    user: string = window.localStorage.getItem('userName');

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.ref.orderByChild('user').equalTo(this.user).on('value', resp => {
            this.notes = [];
            this.notes = snapshotToArray(resp);
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddNotePage');
    }

    addNotes() {
        this.navCtrl.push(ManageNotePage);
    }

    editNote(note) {
        this.navCtrl.push(ManageNotePage, { note: note });
    }

    deleteNote(note) {
        firebase.database().ref('notes/' + note.key).remove();

        /**
         * below is the another way for deleting the record
         */
        // var db = firebase.database().ref();
        // var query = firebase.database().ref("notes").orderByKey();
        // query.once("value")
        //     .then(function (snapshot) {
        //         snapshot.forEach(function (childSnapshot) {
        //             var pkey = childSnapshot.key;
        //             var chval = childSnapshot.val();

        //             //check if remove this child
        //             if (chval.name == note.name && chval.id == note.id) {
        //                 db.child("notes/" + pkey).remove();
        //                 return true;
        //             }
        //         });
        //     });
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
