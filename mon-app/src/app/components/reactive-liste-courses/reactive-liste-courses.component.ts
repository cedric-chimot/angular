import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-liste-courses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-liste-courses.component.html',
  styleUrl: './reactive-liste-courses.component.css'
})
export class ReactiveListeCoursesComponent {

  article!: FormGroup;

  articles: any[] = [];

  constructor() {
    this.article = new FormGroup({
      designation: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required)
    });
  }

  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0)
  }

}
