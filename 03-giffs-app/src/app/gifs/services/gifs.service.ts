import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];

  // Api values
  private apiKey: string = 'LsG6UIaZ9i8pygDGQchiEuNbYU0yV9Ud';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 20;

  constructor(private http: HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    // delete new tag
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this.http.get(`${this.serviceUrl}/search?api_key=${this.apiKey}&q=${tag}&limit=${this.limit}`)
      .subscribe(res => console.log(res));
  }

}
