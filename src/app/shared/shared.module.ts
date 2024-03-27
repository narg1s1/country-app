import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './ui/filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PaginationComponent, FilterComponent],
  exports: [PaginationComponent, FilterComponent]
})
export class SharedModule { }
