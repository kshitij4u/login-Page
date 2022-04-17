import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: Array<any>;
  totalRecords: any;
  page: number = 1;
  constructor(private randomUsers: ServicesComponent) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.randomUsers.getData().subscribe((data) => {
      console.log(data);
      this.data = data.data;
      this.totalRecords = data.data.length;
    });
  }
}
