import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './ui/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PaginationComponent, SearchComponent],
  exports: [PaginationComponent, SearchComponent]
})
export class SharedModule { }
