import { Component,Input } from '@angular/core';
import { ExerciseResponse } from '../../models/exercise/exercise-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise-card',
  imports: [CommonModule],
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.css'
})
export class ExerciseCardComponent {
  @Input() exercise!: ExerciseResponse;

  constructor() {}

}
