import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-courses.component.html',
  styleUrl: './form-courses.component.css'
})
export class FormCoursesComponent {

  @Output()
  onAddArticle: EventEmitter<any> = new EventEmitter();

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder) {}

  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    if(this.article.valid) {
      this.onAddArticle.emit(this.article.value);
      this.article.reset();
      this.submitted = false;
    } else {
      console.log("INVALIDE !")
    }
  }

  get form() {
    return this.article.controls;
  }

}
