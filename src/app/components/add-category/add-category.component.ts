import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DirtyComponent } from '../../models/dirty-component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, DirtyComponent {

  categoryForm: FormGroup;
  isDirty = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
    this.categoryForm.valueChanges.subscribe( e => this.isDirty = true );
  }

  canDeactivate() {
    return this.isDirty;
  }

  addCategory() {
    console.log(this.categoryForm.value);
  }

}