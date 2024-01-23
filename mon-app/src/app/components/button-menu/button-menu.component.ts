import { Component } from '@angular/core';
import { GenericAlertButtonComponent } from "../generic-alert-button/generic-alert-button.component";

@Component({
    selector: 'app-button-menu',
    standalone: true,
    templateUrl: './button-menu.component.html',
    styleUrl: './button-menu.component.css',
    imports: [GenericAlertButtonComponent]
})
export class ButtonMenuComponent {

  buttons: any[] = [
    {
      buttonTitle: 'Philippe !',
      alertMessage: 'Je sais où tu te caches !'
    },
    {
      buttonTitle: 'Marco !',
      alertMessage: 'Polo !'
    }
  ];
  
}
