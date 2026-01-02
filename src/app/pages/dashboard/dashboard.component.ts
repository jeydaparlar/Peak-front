import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutResponse } from '../../models/workout/workout-response';
import { WorkoutService } from '../../services/workout.services';
import { WorkoutCardComponent } from '../../components/workout-card/workout-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WorkoutCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  workouts: WorkoutResponse[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.getAll().subscribe({
      next: (data) => {
        if (data) {
          // Keep only the latest workout for dashboard
          this.workouts = data.slice(-1);
        }
      },
      error: (error) => {
        console.error('Error loading workouts:', error);
      }
    });
  }
}
