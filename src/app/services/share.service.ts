import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  public totalStudents = 0;
  public totalStudents$ = new BehaviorSubject<number>(0);

  constructor() { }
  //notify
  public setTotalStudents(total: number) {
    this.totalStudents = total;
    this.totalStudents$.next(total);
  }
  //update notify when click save student
  public increaseStudent() {
    this.totalStudents++;
    this.totalStudents$.next(this.totalStudents);
  }
  //update notify when click delete student
  public decreaseStudent() {
    this.totalStudents--;
    this.totalStudents$.next(this.totalStudents);
  }
}
