import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get history(): string[] {
    return this.gifsService.history;
  }

  search(s: string) {
    console.log(s);
    this.gifsService.searchGifs(s);
  }
}
