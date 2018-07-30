import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { Position } from './position';


@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = "https://team-api-web422.herokuapp.com";

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`);
  }

  savePosition(position: Position): Observable<any> {
    return this.http.put<any>(`${this.url}/position/` + position.id, position);
  }

  getPosition(id): Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/position/` + id);
  }
}
