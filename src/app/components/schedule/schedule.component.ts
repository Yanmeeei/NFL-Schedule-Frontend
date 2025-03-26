import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule], // 👈 this includes DatePipe
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  scheduleData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://monkfish-app-ohv8p.ondigitalocean.app/nfl/current-season-schedule')
      .subscribe(data => {
        this.scheduleData = data;
      });
  }
  getGameStatusClass(status: string): string {
    switch (status) {
      case 'scheduled': return 'upcoming';
      case 'closed': return 'final';
      default: return 'in-progress';
    }
  }

  getGameStatusText(game: any): string {
    if (game.status === 'closed') return 'FINAL';
    if (game.status === 'scheduled') return 'UPCOMING';
    if (game.status === 'inprogress') return `Q2 | 03:40`; // Add real logic if available
    return game.status.toUpperCase();
  }

}
