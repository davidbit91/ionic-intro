import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2CommentPageRoutingModule } from './tab2-comment-routing.module';

import { Tab2CommentPage } from './tab2-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2CommentPageRoutingModule
  ],
  declarations: [Tab2CommentPage]
})
export class Tab2CommentPageModule {}
