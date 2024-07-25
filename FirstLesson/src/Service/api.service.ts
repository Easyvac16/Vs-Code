import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey = '788fc75'; 
  private baseURL: string = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  public get<T>(endPoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseURL}${endPoint}&apikey=${this.apiKey}`);
  }

  public post<T>(data: any, endPoint: string, baseURL: string): Observable<T> {
    return this.http.post<T>(`${baseURL}/${endPoint}`, data);
  }

  public put<T>(data: any, endPoint: string): Observable<T> {
    return this.http.put<T>(`${this.baseURL}${endPoint}`, data);
  }

  public delete<T>(endPoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseURL}${endPoint}`);
  }
}
