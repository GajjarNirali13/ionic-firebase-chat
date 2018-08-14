import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import * as firebase from 'firebase';


@IonicPage()
@Component({
    selector: 'page-manage-note',
    templateUrl: 'manage-note.html',
})
export class ManageNotePage {
    pageTitle: string = "Add";
    btnText: string = "Save";
    userName: any;
    noteForm: FormGroup;
    data = { id: 0, user: '', title: '', description: '' };
    ref = firebase.database().ref('notes/')
    myRand: number;
    note: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder
    ) {
        this.note = navParams.get('note');
        this.noteForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required]
        });
        if (this.note) {
            this.setFormData();
        }
    }

    setFormData() {
        this.pageTitle = "Edit";
        this.btnText = "Update";
        this.noteForm = this.fb.group({
            title: [this.note.title, Validators.required],
            description: [this.note.description, Validators.required]
        });
    }

    ionViewDidLoad() {
        this.userName = JSON.parse(window.localStorage.getItem('userInfo'));
        this.myRand = this.random();
    }

    random(): number {
        let rand = Math.floor(1000 + Math.random() * 9000);
        return rand;
    }

    onSubmit() {
        if (this.pageTitle == "Edit") {
            this.updateData();
        } else {
            this.saveData()
        }
    }

    saveData() {
        let newData = this.ref.push();
        newData.set({
            id: this.myRand,
            user: this.userName.userId,
            title: this.noteForm.get('title').value,
            description: this.noteForm.get('description').value
        });
        this.navCtrl.pop();
    }

    updateData() {
        firebase.database().ref('notes/' + this.note.key).update({
            id: this.myRand,
            user: this.userName.userId,
            title: this.noteForm.get('title').value,
            description: this.noteForm.get('description').value
        });
        this.navCtrl.pop();
    }
}
