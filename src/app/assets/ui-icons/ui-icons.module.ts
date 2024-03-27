import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconEditComponent } from './edit';
import { AppIconDeleteComponent } from './delete';



@NgModule({
  declarations: [AppIconEditComponent, AppIconDeleteComponent],
  exports: [AppIconEditComponent, AppIconDeleteComponent],
  imports: [
    CommonModule
  ],
})
export class UiIconsModule { }
