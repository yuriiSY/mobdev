import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IeNewsPageRoutingModule } from './ie-news-routing.module';

import { IeNewsPage } from './ie-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IeNewsPageRoutingModule
  ],
  declarations: [IeNewsPage]
})
export class IeNewsPageModule {}
