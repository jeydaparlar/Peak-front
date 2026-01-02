import { Component, OnInit } from '@angular/core';
import { WorkoutResponse } from '../../models/workout/workout-response';
import { WorkoutService } from '../../services/workout.services';
import { CommonModule } from '@angular/common';
import { WorkoutCardComponent } from '../../components/workout-card/workout-card.component';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, WorkoutCardComponent],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
    workouts: WorkoutResponse[] = [];

  constructor(private workoutService: WorkoutService) {}
  ngOnInit() {
  this.workoutService.getAll().subscribe(w => {
    this.workouts = w;
  });
}

}
