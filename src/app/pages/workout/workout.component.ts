import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout';
import { WorkoutService } from '../../services/workout.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workoutService.getAll().subscribe(
      (data) => this.workouts = data
    );
  }


}
