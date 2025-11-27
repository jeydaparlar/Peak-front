import { Routes } from '@angular/router';
import { ExerciseComponent } from './pages/exercise/exercise.component';

export const routes: Routes = [
  { path: 'exercises', component: ExerciseComponent },
  { path: '', redirectTo: 'exercises', pathMatch: 'full' }
];
