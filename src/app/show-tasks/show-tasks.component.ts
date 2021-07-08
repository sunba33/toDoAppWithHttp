import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { TaskServiceService } from '../task-service.service';
import { TaskModel } from '../task.model';

@Component({
  selector: 'tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.sass']
})
export class ShowTasksComponent implements OnInit {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  tasks: any[]=[];
  constructor(private http:HttpClient,private _taskService:TaskServiceService) { }

  ngOnInit(): void {
    this._taskService.getTasks().subscribe(
      response=>{
        localStorage.setItem("tasks",JSON.stringify(response));
      });
    this.tasks = this._taskService.getLocalStorageItems();
  }
  updateCompleted(task:any){
    return task.completed = true; 
  }

}
