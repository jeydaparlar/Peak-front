import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { ExerciseResponse } from '../models/exercise/exercise-response';
import { ExerciseForm } from '../models/exercise/exercise-form';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly apiUrl = `${environment.apiUrl}/exercises`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ExerciseResponse[]> {
    return this.http.get<ExerciseResponse[]>(this.apiUrl);
  }

  getById(id: string): Observable<ExerciseResponse> {
    return this.http.get<ExerciseResponse>(`${this.apiUrl}/${id}`);
  }

  create(exercise: ExerciseForm): Observable<ExerciseForm> {
    return this.http.post<ExerciseForm>(this.apiUrl, exercise);
  }
}
