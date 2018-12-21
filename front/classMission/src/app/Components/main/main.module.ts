import { MemberLinePipe } from './../../Shared/Pipes/MemberLine/member-line.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { MembersComponent } from './members/members.component';
import { TaskLinePipe } from '../../Shared/Pipes/TaskLine/task-line.pipe';


@NgModule({
  declarations: [TasksComponent, MembersComponent, MemberLinePipe, TaskLinePipe],
  imports: [
    CommonModule
  ],
  exports: [
    TasksComponent,
    MembersComponent
  ]
})
export class MainModule { }
