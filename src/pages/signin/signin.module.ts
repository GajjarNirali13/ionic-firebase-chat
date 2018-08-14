import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { SigninPage } from './signin';

@NgModule({
    declarations: [
        SigninPage,
        FormsModule
    ],
    imports: [
        IonicPageModule.forChild(SigninPage),
    ],
})
export class SigninPageModule { }
