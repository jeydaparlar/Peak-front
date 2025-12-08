import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment";
import { WorkoutExercise } from "../models/workoutExercise";

@Injectable({
  providedIn: 'root'
})
export class WorkoutExerciseService {

  private readonly apiUrl = `${environment.apiUrl}/workout-exercises`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkoutExercise[]> {
    return this.http.get<WorkoutExercise[]>(this.apiUrl);
  }

  getById(id: string): Observable<WorkoutExercise> {
    return this.http.get<WorkoutExercise>(`${this.apiUrl}/${id}`);
  }

  create(workoutExercise: WorkoutExercise): Observable<WorkoutExercise> {
    return this.http.post<WorkoutExercise>(this.apiUrl, workoutExercise);
  }
}