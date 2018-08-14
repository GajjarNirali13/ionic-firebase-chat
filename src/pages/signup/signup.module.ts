import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { SignupPage } from './signup';

@NgModule({
    declarations: [
        SignupPage,
        FormsModule
    ],
    imports: [
        IonicPageModule.forChild(SignupPage),
    ],
})
export class SignUpPageModule { }
