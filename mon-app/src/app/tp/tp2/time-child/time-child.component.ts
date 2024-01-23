import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-child',
  standalone: true,
  imports: [],
  templateUrl: './time-child.component.html',
  styleUrl: './time-child.component.css'
})
export class TimeChildComponent {

  @Input()
  time: string = '00:00:00';

}
