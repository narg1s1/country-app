import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 12;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  previousPage(): void {
    if (!this.isFirstPage()) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (!this.isLastPage()) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }
}
