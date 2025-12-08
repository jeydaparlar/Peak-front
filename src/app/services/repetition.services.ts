import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/enviroment';
import { Repetition } from '../models/repetition';

@Injectable({
    providedIn: 'root'
})

export class RepetitionService{
    private readonly apiUrl = `${environment.apiUrl}/repetition`;

    constructor(private http: HttpClient){}

    getAll():Observable<Repetition[]>{
        return this.http.get<Repetition[]>(this.apiUrl);
    }
    getById(id: string):Observable<Repetition>{
        return this.http.get<Repetition>(`${this.apiUrl}/${id}`);
    }
    create(rep: Repetition): Observable<Repetition>{
        return this.http.post<Repetition>(this.apiUrl,rep)
    }
}