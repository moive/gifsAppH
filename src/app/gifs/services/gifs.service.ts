import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 'bnfRU9lSUHO1YImEZTRyMs4mhzUOWUHS';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];
  public result: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) ?? [];
    this.result = JSON.parse(localStorage.getItem('results')!) ?? [];
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

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.urlService}/search`, { params })
      .subscribe((res) => {
        this.result = res.data;
        localStorage.setItem('results', JSON.stringify(this.result));
      });
  }
}
