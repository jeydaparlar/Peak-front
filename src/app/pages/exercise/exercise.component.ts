import { Component, OnInit } from '@angular/core';
import { ExerciseResponse } from '../../models/exercise/exercise-response';
import { ExerciseService } from '../../services/exercise.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  exercises: ExerciseResponse[] = [];

constructor(private exerciseService: ExerciseService) {}

ngOnInit() {
  this.exerciseService.getAll().subscribe(
    (data) => this.exercises = data
  ); 
}


}
