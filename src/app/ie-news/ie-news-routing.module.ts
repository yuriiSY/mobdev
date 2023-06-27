import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IeNewsPage } from './ie-news.page';

const routes: Routes = [
  {
    path: '',
    component: IeNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IeNewsPageRoutingModule {}
