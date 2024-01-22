import { Component } from '@angular/core';
import { CartesComponent } from "../cartes/cartes.component";

@Component({
    selector: 'app-affichage',
    standalone: true,
    templateUrl: './affichage.component.html',
    styleUrl: './affichage.component.css',
    imports: [CartesComponent]
})
export class AffichageComponent {
  hidden: boolean = true;

  toggle() {
    this.hidden = !this.hidden;
  }
}
