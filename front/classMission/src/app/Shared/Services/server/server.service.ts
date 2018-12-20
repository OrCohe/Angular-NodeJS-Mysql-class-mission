import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:4500';
  }
  getMembers(): any {
    return this.http.get(`${this.baseUrl}/members`);
  }
  getTasks(): any {
    return this.http.get(`${this.baseUrl}/tasks`);
  }
  addMember(name: string, nickname: string, role: string): any {
    return this.http.post(`${this.baseUrl}/members`, {name, nickname, role});
  }
  addTask(description: string, date: Date, personId: number): any {
    return this.http.post(`${this.baseUrl}/tasks`, {description, date, personId});
  }
  deleteMember(id: number): any {
    return this.http.delete(`${this.baseUrl}/members/${id}`);
  }
  deleteTask(id: number): any {
    return this.http.delete(`${this.baseUrl}/tasks/${id}`);
  }
}
