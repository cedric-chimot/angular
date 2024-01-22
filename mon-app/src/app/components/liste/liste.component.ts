import { Component } from '@angular/core';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

  items = [ {id : 1, name : 'Carlos'}, {id : 2, name : 'Johnny Halliday'}, {id : 3, name : 'Michel Polnareff'} ];

}
