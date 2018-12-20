import { ServerService } from './../../../Shared/Services/server/server.service';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../../Models/TaskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: TaskModel[];
  gotTasks: boolean;
  taskInput: boolean;
  errorMsg: string;
  members: any[];
  constructor(private serverService: ServerService) {
    this.gotTasks = false;
    this.taskInput = false;
    this.errorMsg = null;
    this.members = [];
  }

  ngOnInit() {
    this.serverService.getTasks().subscribe(res => {
      if (res.status) {
        this.tasks = res.data;
        this.gotTasks = true;
      } else {
        this.tasks = [];
      }
    });
    this.serverService.getMembers().subscribe(res => {
      if (res.status) {
        res.data.forEach(element => {
          this.members.push({name: element.name, id: element.id});
        });
      } else {
        this.members = [];
      }
    });
  }
  openTaskInput() {
    this.taskInput = true;
  }
  addTask(description: string, date: Date, personId: number) {
    if (description.trim() && date && +personId) {
      this.serverService.addTask(description, date, personId).subscribe(res => {
        if (res.status) {
          let personName: string;
          this.members.forEach(member => {
            if (member.id === +personId) {
              personName = member.name;
            }
          });
          this.tasks = this.tasks.concat({id: res.data.insertId, description: description, date: date, name: personName});
          this.errorMsg = null;
          this.gotTasks = true;
          this.taskInput = false;
        }
      });
    } else {
      this.errorMsg = 'Check your data';
    }
  }
  deleteTask(id: number) {
    this.serverService.deleteTask(id).subscribe(res => {
      if (res.status) {
        this.serverService.getTasks().subscribe(ress => {
          if (ress.status) {
            this.tasks = ress.data;
          } else {
            this.tasks = [];
          }
        });
      }
    });
  }

}
