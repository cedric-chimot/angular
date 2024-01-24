import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-user-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-formulaire.component.html',
  styleUrl: './user-formulaire.component.css'
})
export class UserFormulaireComponent {

  user: FormGroup = this.formBuilder.group({
    nom: ['', Validators.minLength(2)],
    prenom: ['', Validators.minLength(2)],
    email: ['', Validators.email],
    entreprise: ['', Validators.minLength(2)],
    telephone: ['',  Validators.minLength(10)]
  });

  submitted: boolean = false;

  users: any[] =[];

  constructor(private formBuilder: FormBuilder) {}

  addUser() {
    this.users.push(this.user.value);
    this.submitted = false;
    this.user.reset();
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.user.invalid) {
      return false;
    } else {
      this.addUser();
      return true;
    }
  }

  get form() {
    return this.user.controls;
  }

}
