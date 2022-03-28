import { studentModel } from './../model/studentModel.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    })
  };

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  //GET
  public getStudents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public getElementStudents(id: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  //GET RANDOM STUDENTS
  public getRandomStudents(): Observable<any> {
    const url = `https://randomuser.me/api/?results`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  //POST
  public postStudents(data: studentModel) {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient.post<any>(url, data, this.httpOptions);
  }

  //PUT
  public putStudents(id: any, data: studentModel) {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this,this.httpClient.put<any>(url, data, this.httpOptions);
  }

  //DELETE
  public deleteStudents(id: any) {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this,this.httpClient.delete<any>(url, this.httpOptions);
  }
}
