import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetResponse } from '../../models/set/set-response';
import { SetService } from '../../services/set.services';
import { ActivatedRoute } from '@angular/router';
import { SetCardComponent } from '../../components/set-card/set-card.component';

@Component({
  selector: 'app-set',
  imports: [CommonModule, SetCardComponent],
  templateUrl: './set.component.html',
  styleUrl: './set.component.css'
})
export class SetComponent implements OnInit {
  workoutId! : string;
  exerciseId! : string;
  sets: SetResponse[] = [];
  constructor(private setService: SetService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.workoutId = params['workoutId'];
      this.exerciseId = params['exerciseId'];
    });
    this.setService.getSetsByExerciseId(this.workoutId, this.exerciseId).subscribe({
      next: (data) => {
        this.sets = data;
      },
      error: (error) => {
        console.error('Error loading sets for exercise:', error);
      }
    });
  }
}
