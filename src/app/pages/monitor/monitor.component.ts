import { Component } from '@angular/core';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {
  userProfile = {
    name: '张三',
    age: 28,
    gender: '男',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    address: '北京市海淀区',
    occupation: '前端工程师',
    joinDate: '2020-05-15',
    lastLogin: '2023-11-20 14:30'
  };

  stats = {
    completedTasks: 42,
    ongoingProjects: 5,
    performanceRating: 4.7
  };
}