import { Component } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { ExerciseService } from '../../services/exercise.services';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {
  exercises: Exercise[] = [];

constructor(private exerciseService: ExerciseService) {}

ngOnInit() {
  this.exerciseService.getAll().subscribe(
    (data) => this.exercises = data
  );
}


}
