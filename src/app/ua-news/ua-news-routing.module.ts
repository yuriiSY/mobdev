import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UaNewsPage } from './ua-news.page';

const routes: Routes = [
  {
    path: '',
    component: UaNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UaNewsPageRoutingModule {}
