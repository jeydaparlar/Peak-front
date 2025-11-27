import { Routes } from '@angular/router';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { WorkoutComponent } from './pages/workout/workout.component';

export const routes: Routes = [
  { path: 'exercises', component: ExerciseComponent },
   { path: 'workouts', component: WorkoutComponent },
  { path: '', redirectTo: 'exercises', pathMatch: 'full' }
];
