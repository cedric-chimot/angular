import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from "./components/user/user.component";
import { AlertButtonComponent } from "./components/alert-button/alert-button.component";
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from "./components/magie/magie.component";
import { ListeFiltreComponent } from "./components/liste-filtre/liste-filtre.component";
import { GenericAlertButtonComponent } from "./components/generic-alert-button/generic-alert-button.component";
import { ButtonMenuComponent } from "./components/button-menu/button-menu.component";
import { AffichageComponent } from "./tp/tp1/affichage/affichage.component";
import { TimeComponent } from "./tp/tp2/time/time.component";
import { ListeCoursesComponent } from "./components/liste-courses/liste-courses.component";
import { ReactiveListeCoursesComponent } from "./components/reactive-liste-courses/reactive-liste-courses.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AffichageComponent, FirstComponentComponent, UserComponent, AlertButtonComponent, ListeComponent, MagieComponent, ListeFiltreComponent, GenericAlertButtonComponent, ButtonMenuComponent, TimeComponent, ListeCoursesComponent, ReactiveListeCoursesComponent]
})
export class AppComponent {
[x: string]: any;
  title = 'mon-app';
}
