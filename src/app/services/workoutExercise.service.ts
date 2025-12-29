import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment";
import { WorkoutExerciseResponse } from "../models/workoutExercise/workoutExercise-response";
import { WorkoutExerciseForm } from "../models/workoutExercise/workoutExercise-form";

@Injectable({
  providedIn: 'root'
})
export class WorkoutExerciseService {

  private readonly apiUrl = `${environment.apiUrl}/workout-exercises`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkoutExerciseResponse[]> {
    return this.http.get<WorkoutExerciseResponse[]>(this.apiUrl);
  }

  getById(id: string): Observable<WorkoutExerciseResponse> {
    return this.http.get<WorkoutExerciseResponse>(`${this.apiUrl}/${id}`);
  }

  create(workoutExercise: WorkoutExerciseForm): Observable<WorkoutExerciseForm> {
    return this.http.post<WorkoutExerciseForm>(this.apiUrl, workoutExercise);
  }
}