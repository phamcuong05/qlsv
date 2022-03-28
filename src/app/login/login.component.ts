import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  public loginForm = new FormGroup({
    email: new FormControl,
    pass: new FormControl,
  })
  ngOnInit(): void {
  }

  public login() {
    this.router.navigate(['students']);
  }
}
