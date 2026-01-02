import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { WorkoutComponent } from './pages/workout/workout.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'exercises', component: ExerciseComponent },
  { path: 'workouts', component: WorkoutComponent },
];
