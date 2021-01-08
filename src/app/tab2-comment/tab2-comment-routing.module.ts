import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2CommentPage } from './tab2-comment.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2CommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2CommentPageRoutingModule {}
