import { MemberModel } from './../../../Models/MemberModel/index';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberLine'
})
export class MemberLinePipe implements PipeTransform {

  transform(data: MemberModel): any {
    return `ID: ${data.id}, Name: ${data.name}, Nickname: ${data.nickname}, Role: ${data.role}`;
  }

}
