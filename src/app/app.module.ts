import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import {DataService} from './app.services/DataService';


import { AppComponent } from './app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'timesheet',
    component: TimesheetComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    DashboardComponent,
    TaskEntryComponent,
    TaskListComponent,
    TimesheetEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
