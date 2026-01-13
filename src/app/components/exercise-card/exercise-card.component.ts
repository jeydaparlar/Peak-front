import { Component,Input } from '@angular/core';
import { ExerciseResponse } from '../../models/exercise/exercise-response';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkoutResponse } from '../../models/workout/workout-response';

@Component({
  selector: 'app-exercise-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.css'
})
export class ExerciseCardComponent {
  @Input() exercise!: ExerciseResponse;
  @Input() workout!: WorkoutResponse;

  constructor() {}

}
