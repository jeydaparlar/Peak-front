import { Routes } from '@angular/router';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { WorkoutExerciseComponent } from './pages/workout-exercise/workout-exercise.component';
import { SetComponent } from './pages/set/set.component';

export const routes: Routes = [
  { path: 'exercises', component: ExerciseComponent },
  { path: 'workouts', component: WorkoutComponent },
  { path: 'workout-exercises', component: WorkoutExerciseComponent },
  { path: 'set', component:SetComponent },
];
