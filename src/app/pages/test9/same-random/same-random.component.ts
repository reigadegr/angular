import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-same-random',
  templateUrl: './same-random.component.html',
  styleUrls: ['./same-random.component.scss'],
  providers: [RandomNumberService ] // 使用根注入器的实例
})
export class SameRandomComponent implements OnInit {
  randomNumber: number = 0;

  constructor(private randomService: RandomNumberService) { }

  ngOnInit(): void {
    this.randomNumber = this.randomService.getRandomNumber();
  }
}  