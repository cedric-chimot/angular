import { Component } from '@angular/core';
import { FormCoursesComponent } from "../form-courses/form-courses.component";

@Component({
    selector: 'app-data-courses',
    standalone: true,
    templateUrl: './data-courses.component.html',
    styleUrl: './data-courses.component.css',
    imports: [FormCoursesComponent]
})
export class DataCoursesComponent {

  constructor() {}

  courses: any[] = [];

  addCourses(course: any) {
    this.courses.push(course);
  }

  get total() {
    return this.courses.reduce((total, course) => total + course.prix, 0);
  }
 
}
