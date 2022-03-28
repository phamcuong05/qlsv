import { ShareService } from './services/share.service';
import { HttpService } from './services/http.service';

import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qlsv';
  public totalStudents = 0;
  constructor(private httpService: HttpService, private shareService: ShareService) {}

  ngOnInit(): void {
    this.shareService.totalStudents$.subscribe((total) => {
      this.totalStudents = total;
    });
    if(this.shareService.totalStudents === 0) {
      this.httpService.getStudents().subscribe((data) => {
        this.shareService.setTotalStudents(data.length);
      })
    }

  }

  @ViewChild('sidenav') sidenav!: MatSidenav;
  public openLeftSide() {
    this.sidenav.toggle();
  }

}

