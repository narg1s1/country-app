import { Component, Inject, ViewEncapsulation } from '@angular/core';
import Country from '../../../../models/country';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-country-edit-list',
  templateUrl: './country-edit-list.component.html',
  styleUrl: './country-edit-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CountryEditListComponent {
  editForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CountryEditListComponent>,
    @Inject(MAT_DIALOG_DATA) public country: Country,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm(): void {
    this.editForm = this.formBuilder.group({
      name: [this.country.name.common, Validators.required],
      capital: [this.country.capital, Validators.required],
      region: [this.country.region, Validators.required],
      population: [this.country.population, Validators.required]
    });
  }

  saveChanges(): void {
    if (this.editForm.valid) {
      const editedCountry: Country = {
        name: this.editForm.value.name,
        capital: this.editForm.value.capital,
        region: this.editForm.value.region,
        population: this.editForm.value.population,
        currencies: this.editForm.value.currencies,
        flag: ''
      };
      this.dialogRef.close(editedCountry); 
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
