import {Set} from './set'
export interface WorkoutExercise {
    work_exo_id: string;
    work_id: string;
    exo_id: string;
    sets: Set[]
  }