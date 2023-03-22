import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 'bnfRU9lSUHO1YImEZTRyMs4mhzUOWUHS';
  private _history: string[] = [];
  public result: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) ?? [];
    // if (localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!);
    // }
  }

  get history(): string[] {
    return this._history;
  }

  searchGifs(query: string): void {
    /* !this._history.includes(query) sino lo incluye que lo agregue*/
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);

      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=bnfRU9lSUHO1YImEZTRyMs4mhzUOWUHS&q=${query}&limit=10`
      )
      .subscribe((res) => {
        console.log(res.data);
        this.result = res.data;
      });

    console.log(this._history);
  }
}
