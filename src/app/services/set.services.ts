import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../enviroments/enviroment";
import { Set } from "../models/set";

@Injectable({
    providedIn: 'root'
})
export class SetService {
    private readonly apiUrl = `${environment.apiUrl}/set`;

    constructor(private http: HttpClient) {}
    
    getAll(): Observable<Set[]> {
        return this.http.get<Set[]>(this.apiUrl);
    }
    getById(id: string): Observable<Set> {
        return this.http.get<Set>(`${this.apiUrl}/${id}`);
    }
    create(set: Set): Observable<Set> {
        return this.http.post<Set>(this.apiUrl, set);
    }  
}