import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class ServicesComponent implements OnInit {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    // const url = 'https://reqres.in/api/users?page=2';
    const url = 'https://reqres.in/api/users?data=100';
    return this.http.get(url);
  }

  ngOnInit(): void {}
}
