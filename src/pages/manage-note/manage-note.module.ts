import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { ManageNotePage } from './manage-note';

@NgModule({
  declarations: [
    ManageNotePage
  ],
  imports: [
    IonicPageModule.forChild(ManageNotePage),
    FormsModule
  ],
})
export class ManageNotePageModule {}
