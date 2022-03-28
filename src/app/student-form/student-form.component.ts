import { ShareService } from './../services/share.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  public id: any = 0;
  public studentsForm = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    specialist: new FormControl('')
  })
  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute, private shareService: ShareService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id > 0) {
      this.editStudent(this.id);
    }
  }

  //Create new
  public createStudent() {
    const newStudent: any = {};
    for(const controlName in this.studentsForm.controls) {
      newStudent[controlName] = this.studentsForm.controls[controlName].value;
    }
    return newStudent;
  }

  //Load data & edit
  public editStudent(id: number) {
    this.httpService.getElementStudents(id).subscribe((data) => {
      for(const constrolName in this.studentsForm.controls) {
        if(constrolName) {
          this.studentsForm.controls[constrolName].setValue(data[constrolName]);
        }
      }
    })
  }

  //Save & update
  public saveStudent() {
    if(this.id > 0) {
      this.httpService.putStudents(this.id, this.createStudent()).subscribe((data) => {
        alert('Updated')
        this.router.navigate(['students']);
      }) //update
    }else{
      this.httpService.postStudents(this.createStudent()).subscribe((data) => { //save
        this.studentsForm.reset();
        this.shareService.increaseStudent();
        alert('Saved');
      })
    }
  }

  //auto add student
  public randomStudent() {
    this.httpService.getRandomStudents().subscribe((data) => {
      console.log('show student randomm: ', data);
      if(data && data.results && data.results.length > 0) {
        const std = data.results[0];
        this.studentsForm.controls['code'].setValue(std.id.name);
        this.studentsForm.controls['name'].setValue(std.name.title + ' ' + std.name.first + ' ' + std.name.last);
        this.studentsForm.controls['age'].setValue(std.dob.age);
        this.studentsForm.controls['gender'].setValue(std.gender);
        this.studentsForm.controls['email'].setValue(std.email);
        this.studentsForm.controls['address'].setValue(std.location.city + ', ' + std.location.country);
      }
    })
  }

  //Go back
  public goBack() {
    this.router.navigate(['students']);
  }

}
