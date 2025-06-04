import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test7',
  imports: [CommonModule],
  templateUrl: './test7.component.html',
  styleUrl: './test7.component.scss'
})
export class Test7Component {
  title ='multiplication-table-app';
  people = [
    { id: 1, name: 'gmj', age: 22 },
    { id: 2, name: 'GMJ', age: 23 },
    { id: 3, name: '高铭俊', age: 24 }
  ];
  numbers = Array.from({ length: 9 }, (_, i) => i + 1);
}
