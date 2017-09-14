import { Component, Input, OnInit, OnChanges} from '@angular/core';
import {Task} from '../app.models/Task';
import {DateEntry} from '../app.models/DateEntry';

@Component({
  selector: 'timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent implements OnInit, OnChanges {
 
  dateEntries: DateEntry[];

  @Input() tasks: Task[];

  ngOnChanges() {

  }
  
  constructor() { 

    let dateStart = new Date();

    let datetasks = [
          {
            sourcePoolID : 12312321232,
            ptsID:  2342342332,
            jobTypeID: 23423233,
            countryID: 23,
            fromDate: dateStart,
            toDate: dateStart,
            noOfHours: 10 ,
            description: 'Task 1',
          },
          {
            sourcePoolID : 12312321232,
            ptsID:  2342342332,
            jobTypeID: 23423233,
            countryID: 23,
            fromDate: dateStart,
            toDate: dateStart,
            noOfHours: 10 ,
            description: 'Task 1',
          }
      ];
    
    this.dateEntries = [];
    for(var i=0;i<=30;i++){
      let nextDate: Date;
      nextDate = new Date();
      nextDate.setDate(dateStart.getDate() + i);
      let de = new DateEntry();
      de.entryDate = nextDate;
      de.tasks = datetasks;
      this.dateEntries.push(de);
    }
    console.log(this.dateEntries);
  }

  ngOnInit() {
  }

}
