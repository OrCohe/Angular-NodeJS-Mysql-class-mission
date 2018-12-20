import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [TasksComponent, MembersComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent,
    MembersComponent
  ]
})
export class MainModule { }
