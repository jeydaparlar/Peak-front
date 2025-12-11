import { Routes } from '@angular/router';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { WorkoutComponent } from './pages/workout/workout.component';
import { RepetitionComponent } from './pages/repetition/repetition.component';
import { WorkoutExerciseComponent } from './pages/workout-exercise/workout-exercise.component';

export const routes: Routes = [
  { path: 'exercises', component: ExerciseComponent },
  { path: 'repetitions', component: RepetitionComponent },
  { path: 'workouts', component: WorkoutComponent },
  { path: 'workout-exercises', component: WorkoutExerciseComponent },
];
