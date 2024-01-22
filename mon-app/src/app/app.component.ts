import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from "./components/user/user.component";
import { AlertButtonComponent } from "./components/alert-button/alert-button.component";
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from "./components/magie/magie.component";
import { ListeFiltreComponent } from "./components/liste-filtre/liste-filtre.component";
import { CartesComponent } from './tp1/cartes/cartes.component';
import { AffichageComponent } from './tp1/affichage/affichage.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CartesComponent, AffichageComponent, FirstComponentComponent, UserComponent, AlertButtonComponent, ListeComponent, MagieComponent, ListeFiltreComponent]
})
export class AppComponent {
[x: string]: any;
  title = 'mon-app';
}
