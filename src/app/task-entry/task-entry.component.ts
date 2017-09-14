import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataService} from '../app.services/DataService'
import {Task} from '../app.models/Task';

@Component({
  selector: 'task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})

export class TaskEntryComponent implements OnInit {

    @Output() addTask = new EventEmitter<Task>();
    
    model: Task;

    sourcePools: {sourcePoolID: number, sourcePoolName: string, jobType: string[]}[];
    pts: {ptsID: number, label: string}[];
    countries: {countryID: number, label: string}[];

  constructor(ds: DataService ) { 
     this.sourcePools = ds.sourcePools;
     this.pts = ds.pts;
     this.countries = ds.countries;
     this.model = new Task();
  }

  ngOnInit() {
  }
   
  submit() {
      console.log('called when click');
      this.addTask.emit(this.model);
  }
}
