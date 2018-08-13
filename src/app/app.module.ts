import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RoomPage } from '../pages/room/room';
import { SigninPage } from '../pages/signin/signin';
import { NotePage } from '../pages/note/note';
import { ManageNotePage } from '../pages/manage-note/manage-note';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        AddRoomPage,
        RoomPage,
        SigninPage,
        NotePage,
        ManageNotePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        AddRoomPage,
        RoomPage,
        SigninPage,
        NotePage,
        ManageNotePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
