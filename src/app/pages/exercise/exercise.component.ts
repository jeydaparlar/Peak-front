import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { ExerciseService } from '../../services/exercise.services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-exercise',
  imports: [CommonModule],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent implements OnInit {
  exercises: Exercise[] = [];

constructor(private exerciseService: ExerciseService) {}

ngOnInit() {
  this.exerciseService.getAll().subscribe(
    (data) => this.exercises = data
  ); 
}


}
