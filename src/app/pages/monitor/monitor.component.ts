import { Component } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {
  userProfile = {
    name: '高铭俊',
    age:24,
    gender: '男',
    email: 'mingjun2001@126.com',
    phone: '135****3187',
    address: '北京市西城区',
    occupation: '北方工业大学计算机科学与技术专业',
    joinDate: '2023-09-11',
    lastLogin: '2025-6-6 14:30'
  };

  stats = {
    completedTasks: 42,
    ongoingProjects: 5,
    performanceRating: 4.7
  };
}