import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScheduleComponent} from './components/schedule/schedule.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScheduleComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scoreboard';
}
