import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-alert-button',
  standalone: true,
  imports: [],
  templateUrl: './generic-alert-button.component.html',
  styleUrl: './generic-alert-button.component.css'
})
export class GenericAlertButtonComponent {

  // input pour récupérer la donnée du titre
  @Input()
  buttonTitle!: string;
  // input pour récupérer la donnée du message
  @Input()
  alertMessage!: string;

  onClick() {
    alert(this.alertMessage);
  }

}
