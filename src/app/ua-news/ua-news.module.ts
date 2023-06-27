import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UaNewsPageRoutingModule } from './ua-news-routing.module';

import { UaNewsPage } from './ua-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UaNewsPageRoutingModule
  ],
  declarations: [UaNewsPage]
})
export class UaNewsPageModule {}
