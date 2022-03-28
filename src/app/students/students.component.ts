import { ShareService } from './../services/share.service';
import { Router } from '@angular/router';
import { HttpService } from './../services/http.service';
import { studentModel } from './../model/studentModel.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  public students: studentModel[] = [];
  public searchStudent: any;

  constructor(private httpService: HttpService, private router: Router, private shareService: ShareService) {}

  ngOnInit(): void {
    //Load data from db.json to student table
    this.loadData();
  }

  //GET
  public loadData() {
    this.httpService.getStudents().subscribe((data) => {
      this.students = data;

      console.log('show student: ', data);
    });
  }

  public addStudent() {
    this.router.navigate(['student-form', 0]);
  }

  public editStudent(id: any) {
    this.router.navigate(['student-form', id]);
  }

  public deleteStudent(id: any) {
    this.httpService.deleteStudents(id).subscribe(() => {
      this.loadData();
      this.shareService.decreaseStudent();
      alert('Delete complete')
    })
  }

}
