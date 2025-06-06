import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-new-random',
  templateUrl: './new-random.component.html',
  styleUrls: ['./new-random.component.scss'],
  providers: [RandomNumberService ] // 使用根注入器的实例
})
export class NewRandomComponent implements OnInit {
  randomNumber: number = 0; // 初始化为0

  constructor(private randomService: RandomNumberService) { }

  ngOnInit(): void {
    this.randomNumber = this.randomService.generateNewRandomNumber();
  }
}