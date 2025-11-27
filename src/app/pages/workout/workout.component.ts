import { Component, OnInit } from '@angular/core';
import { Workout } from '../../models/workout';
import { WorkoutService } from '/Users/jeydaparlar/Desktop/Peak-front/src/app/services/workout.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercise',
  imports: [CommonModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.css'
})
export class WorkoutComponent implements OnInit {
  workouts: Workout[] = [];

constructor(private workoutServices: WorkoutService) {}

ngOnInit() {
  this.workoutServices.getAll().subscribe(
    (data) => this.workouts = data
  ); 
}


}
