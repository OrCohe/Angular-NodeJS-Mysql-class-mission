import { ServerService } from './../../../Shared/Services/server/server.service';
import { MemberModel } from './../../../Models/MemberModel/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: MemberModel[];
  gotMembers: boolean;
  memberInput: boolean;
  errorMsg: string;
  constructor(private serverService: ServerService) {
    this.gotMembers = false;
    this.memberInput = false;
   }

  ngOnInit() {
    this.serverService.getMembers().subscribe(res => {
      if (res.status) {
        this.members = res.data;
        this.gotMembers = true;
      } else {
        this.members = [];
      }
    });
  }

  openTaskInput() {
    this.memberInput = true;
  }

  addMember(name: string, nickname: string, role: string) {
    if (name.trim() && nickname.trim() && role.trim()) {
      this.serverService.addMember(name, nickname, role).subscribe(res => {
        if (res.status) {
          this.members = this.members.concat({id: res.data.insertId, name: name, nickname: nickname, role: role});
          this.gotMembers = true;
          this.memberInput = false;
        }
      });
    } else {
      this.errorMsg = 'Check your Data!';
    }
  }

  deleteMember(id: number) {
    this.serverService.deleteMember(id).subscribe(res => {
      if (res.status) {
        this.serverService.getMembers().subscribe(ress => {
          if (ress.status) {
            this.members = ress.data;
          } else {
            this.members = [];
          }
        });
      }
    });
  }
}
