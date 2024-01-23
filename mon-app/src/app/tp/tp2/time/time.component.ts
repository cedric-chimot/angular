import { Component } from '@angular/core';
import { TimeChildComponent } from '../time-child/time-child.component';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [TimeChildComponent],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

  timeZones: any[] = [
      'Europe/Paris',
      'Europe/London',
      'Europe/Madrid',
      'America/Los_Angeles'
  ];

  public setTime(nosFuturesDatas: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: nosFuturesDatas });
    const time = date.split(' ')[1];
    setInterval(() => {
      this.setTime(nosFuturesDatas);
    }, 1000);
    return time;
  }

}
