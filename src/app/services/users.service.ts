import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  private userdEndpoint = `${environment.endpoint}/User`;

  constructor(private http: HttpClient) {}

  public getAll() {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True',
    });
    return this.http.get(`${this.userdEndpoint}`, {
      headers: reqHeader,
    }) as Observable<any[]>;
  }

  create(data: any) {
    const resp = this.http.post(`${this.userdEndpoint}`, data).toPromise();
    return resp;
  }
}
