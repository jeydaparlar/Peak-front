import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkoutService } from '../../../services/workout.services';
import { WorkoutForm } from '../../../models/workout/workout-form';

@Component({
  selector: 'app-add-workout',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css'
})

export class AddWorkoutComponent {
  workoutForm!: FormGroup;

  constructor(private fb: FormBuilder, private workoutService: WorkoutService, private router: Router) {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      note: [''],
    });
  }

  onSubmit() {
    if (this.workoutForm.valid) {
     const  workout: WorkoutForm = {
        name: this.workoutForm.value.name,
        date: new Date(),
        note: this.workoutForm.value.note,
        exercises: []
      };
      this.workoutService.create(workout).subscribe(
        (response) => {
          console.log('Workout created:', response);
          this.workoutForm.reset();
          this.router.navigate(['/workouts']);
        },
        (error) => {
          console.error('Error creating workout:', error);
        }
      );
  }
  }
}
