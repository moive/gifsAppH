import { Component } from '@angular/core';

import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [],
})
export class ResultComponent {
  get result(): Gif[] {
    return this.gifsSevice.result;
  }

  constructor(private gifsSevice: GifsService) {}
}
