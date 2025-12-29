import { Component, OnInit } from '@angular/core';
import { WorkoutExerciseResponse } from '../../models/workoutExercise/workoutExercise-response';
import { WorkoutExerciseService } from '../../services/workoutExercise.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-workout-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-exercise.component.html',
  styleUrl: './workout-exercise.component.css'
})
export class WorkoutExerciseComponent implements OnInit{
  workout_exercises:WorkoutExerciseResponse[] = [];
  constructor(private workoutExerciseService: WorkoutExerciseService){}
  ngOnInit(){
    this.workoutExerciseService.getAll().subscribe(
      (data)=> this.workout_exercises=data
    );
  }
}
