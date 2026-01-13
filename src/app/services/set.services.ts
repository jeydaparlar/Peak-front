import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment";
import { SetResponse } from "../models/set/set-response";
import { SetForm } from "../models/set/set-form";

@Injectable({
    providedIn: 'root'
})
export class SetService {
    private readonly apiUrl = `${environment.apiUrl}/set`;

    constructor(private http: HttpClient) {}
    
    getAll(): Observable<SetResponse[]> {
        return this.http.get<SetResponse[]>(this.apiUrl);
    }
    getById(id: string): Observable<SetResponse> {
        return this.http.get<SetResponse>(`${this.apiUrl}/${id}`);
    }
    getSetsByExerciseId(workoutId: string, exerciseId: string): Observable<SetResponse[]> {
        return this.http.get<SetResponse[]>(`${environment.apiUrl}/workouts/${workoutId}/exercises/${exerciseId}/set`);
    }
    create(set: SetForm): Observable<SetForm> {
        return this.http.post<SetForm>(this.apiUrl, set);
    }  
}