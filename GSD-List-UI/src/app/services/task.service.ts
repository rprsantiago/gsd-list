import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url = "task";

  constructor(
    //inject http client to make http requests to the api
    private http: HttpClient
  ) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiUrl}/${this.url}`);
  }
}