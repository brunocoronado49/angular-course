import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Search gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput>
  `
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  // inyeccion del service
  constructor(private gifsServices: GifsService) {}

  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
