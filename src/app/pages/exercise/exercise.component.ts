import { Component, OnInit } from '@angular/core';
import { ExerciseResponse } from '../../models/exercise/exercise-response';
import { ExerciseService } from '../../services/exercise.services';
import { CommonModule } from '@angular/common';
import { ExerciseCardComponent } from '../../components/exercise-card/exercise-card.component';

@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [CommonModule, ExerciseCardComponent],
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: ExerciseResponse[] = [];

constructor(private exerciseService: ExerciseService) {}

ngOnInit() {
  this.exerciseService.getAll().subscribe(w => {
    this.exercises = w;
  }); 
}
}
