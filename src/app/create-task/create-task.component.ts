import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { TaskModel } from '../task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.sass']
})
export class CreateTaskComponent implements OnInit {
  
  form:FormGroup = new FormGroup({
    task : new FormControl(),
    userID : new FormControl()
  });;

  task = new FormControl();
  userID = new FormControl();
  tempLocal:Array<any> = [];
  constructor(private _taskService:TaskServiceService) {

  }
  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.value.userID);
    this.tempLocal = this._taskService.getLocalStorageItems();
    let tempObj = new TaskModel(this.form.value.task,this.form.value.userID,this.tempLocal.length);
    console.log(tempObj.userId);
    this.tempLocal.push(tempObj);
    localStorage.setItem("tasks",JSON.stringify(this.tempLocal));
  }
}
