import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from "./components/user/user.component";
import { AlertButtonComponent } from "./components/alert-button/alert-button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FirstComponentComponent, UserComponent, AlertButtonComponent]
})
export class AppComponent {
  title = 'mon-app';
}
