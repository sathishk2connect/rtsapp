import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Task} from '../app.models/Task';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {

  @Input() tasks: Task[];

  constructor() {
  }

  ngOnChanges() {

  }

  ngOnInit() {
  }

}
