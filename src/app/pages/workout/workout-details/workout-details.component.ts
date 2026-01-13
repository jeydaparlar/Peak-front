import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutResponse } from '../../../models/workout/workout-response';
import { WorkoutService } from '../../../services/workout.services';  
import { ActivatedRoute } from '@angular/router';
import { ExerciseResponse } from '../../../models/exercise/exercise-response';
import { ExerciseCardComponent } from '../../../components/exercise-card/exercise-card.component';

@Component({
  selector: 'app-workout-details',
  imports: [CommonModule, ExerciseCardComponent],
  templateUrl: './workout-details.component.html',
  styleUrl: './workout-details.component.css'
})
export class WorkoutDetailsComponent implements OnInit {

  workoutId! : string;
  workout! : WorkoutResponse;
  exercises: ExerciseResponse[] = [];

  constructor(private workoutService: WorkoutService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.workoutId = params['id'];
    });
    this.workoutService.getById(this.workoutId).subscribe({
      next: (data) => {
        this.workout = data;
      },
      error: (error) => {
        console.error('Error loading workout details:', error);
      }
    });
    this.workoutService.getExercisesByWorkoutId(this.workoutId).subscribe({
      next: (data) => {
        this.exercises = data;
        console.log('Loaded exercises:', this.exercises);
      },
      error: (error) => {
        console.error('Error loading exercises for workout:', error);
      }
    });
  }

}
