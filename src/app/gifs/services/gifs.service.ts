import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  constructor() {}

  get history(): string[] {
    return this._history;
  }

  searchGifs(query: string): void {
    /* !this._history.includes(query) sino lo incluye que lo agregue*/
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
    console.log(this._history);
  }
}
