import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() regions: string[] = [];
  @Input() selectedRegion: string = '';
  @Output() regionSelected = new EventEmitter<string>();

  constructor() { }

  filterCountries(): void {
    this.regionSelected.emit(this.selectedRegion);
  }
}
