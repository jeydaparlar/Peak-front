import { Component, Input } from '@angular/core';
import { WorkoutResponse } from '../../models/workout/workout-response';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-workout-card',
  imports: [CommonModule],
  templateUrl: './workout-card.component.html',
  styleUrls: ['./workout-card.component.css']
})
export class WorkoutCardComponent {
@Input() workout!: WorkoutResponse;

constructor(private router: Router) {}

navigateToDetail() {
  this.router.navigate(['/workouts', this.workout.work_id]);
}
}