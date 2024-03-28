import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './ui/filter/filter.component';
import { SearchComponent } from './ui/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PaginationComponent, FilterComponent, SearchComponent],
  exports: [PaginationComponent, FilterComponent, SearchComponent]
})
export class SharedModule { }
