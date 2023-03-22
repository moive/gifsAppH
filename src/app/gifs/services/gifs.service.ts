import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 'bnfRU9lSUHO1YImEZTRyMs4mhzUOWUHS';
  private _history: string[] = [];

  constructor(private http: HttpClient) {}

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

    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=bnfRU9lSUHO1YImEZTRyMs4mhzUOWUHS&q=goku&limit=10'
      )
      .subscribe((res: any) => {
        console.log(res.data);
      });

    console.log(this._history);
  }
}
