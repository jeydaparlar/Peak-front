import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { WorkoutResponse } from '../models/workout/workout-response';
import { WorkoutForm } from '../models/workout/workout-form';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private readonly apiUrl = `${environment.apiUrl}/workouts`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<WorkoutResponse[]> {
    return this.http.get<WorkoutResponse[]>(this.apiUrl);
  }

  getById(id: string): Observable<WorkoutResponse> {
    return this.http.get<WorkoutResponse>(`${this.apiUrl}/${id}`);
  }

  create(workout: WorkoutForm): Observable<WorkoutForm> {
    return this.http.post<WorkoutForm>(this.apiUrl, workout);
  }
}
