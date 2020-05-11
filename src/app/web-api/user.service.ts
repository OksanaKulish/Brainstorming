import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../shared/data/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string= "http://localhost:56493/api/user";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }
}
