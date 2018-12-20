import { MembersComponent } from './Components/main/members/members.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './Components/main/tasks/tasks.component';


const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '**', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
