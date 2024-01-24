import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder-liste-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrl: './formbuilder-liste-courses.component.css'
})
export class FormbuilderListeCoursesComponent {

  article: FormGroup = this.formBuilder.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required]
  });

  submitted: boolean = false;

  articles: any[] =[];

  constructor(private formBuilder: FormBuilder) {}

  addArticle() {
    this.articles.push(this.article.value)
    this.submitted = false;
    this.article.reset();
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.article.invalid) {
      return false
    } else {
      this.addArticle();
      return true;
    }
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }

  get form() {
    return this.article.controls;
  }

}
