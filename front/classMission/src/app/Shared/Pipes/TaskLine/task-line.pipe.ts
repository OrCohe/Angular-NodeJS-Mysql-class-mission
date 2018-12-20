import { TaskModel } from './../../../Models/TaskModel/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskLine'
})
export class TaskLinePipe implements PipeTransform {

  transform(data: TaskModel): any {
    return `ID: ${data.id}, Des: ${data.description}, Date: ${data.date}, By: ${data.name}`;
  }
}
