import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { WorkoutDetailsComponent } from './pages/workout/workout-details/workout-details.component';
import { SetComponent } from './pages/set/set.component';
import { AddWorkoutComponent } from './pages/workout/add-workout/add-workout.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'exercises', component: ExerciseComponent },
  { path: 'workouts', component: WorkoutComponent },
  {path: 'addworkout', component: AddWorkoutComponent},
  {path: 'workouts/:id', component: WorkoutDetailsComponent},
  {path : 'workouts/:workoutId/exercises/:exerciseId/set', component: SetComponent}

];
