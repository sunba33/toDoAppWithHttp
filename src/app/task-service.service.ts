import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from './task.model';
import { Observable } from 'rxjs';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks:TaskModel[] = [];
  constructor(private http:HttpClient) { }

  getTasks():Observable<any>{ 
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
    
  }

  getLocalStorageItems():any{
    let tempTasks = localStorage.getItem('tasks');
    if(tempTasks){
    tempTasks = JSON.parse(tempTasks);}
    return tempTasks;
  }
}
