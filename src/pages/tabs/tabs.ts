import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { RoomPage } from '../room/room';
import { NotePage } from '../note/note';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html',
})
export class TabsPage {
    tab1: any;
    tab2: any;

    constructor() {
        this.tab1 = RoomPage;
        this.tab2 = NotePage;
    }
}
