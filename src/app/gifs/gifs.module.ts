import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { GifsCardComponent } from './gifs-card/gifs-card.component';

@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultComponent,
    GifsCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
