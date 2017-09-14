import { Component, OnInit } from '@angular/core';
import {Task} from '../app.models/Task';

@Component({
  selector: 'timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  taskList: Task[];

  constructor() { 
    this.taskList = [];
  }

  ngOnInit() {
    
  }

  updateTaskList(event) {
    let newTask =  Object.assign({}, event);
    this.taskList.push(newTask);
  }

}
