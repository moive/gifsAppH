import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: [],
})
export class ResultComponent {
  get result(): any[] {
    return this.gifsSevice.result;
  }

  constructor(private gifsSevice: GifsService) {}
}
