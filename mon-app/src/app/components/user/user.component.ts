import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  nom: string = 'Chimot';
  prenom: string = 'Cedric';
  job: string = '';

  imageUrl: string = '../../assets/2019-03-27.jpg';

}
