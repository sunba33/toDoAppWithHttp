import { Component, OnInit } from '@angular/core';
import { ShowTasksComponent } from '../show-tasks/show-tasks.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
