import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-different-random',
  templateUrl: './different-random.component.html',
  styleUrls: ['./different-random.component.scss'],
  providers: [RandomNumberService] // 每个实例单独提供
})
export class DifferentRandomComponent implements OnInit {
  randomNumber: number = 0;

  constructor(private randomService: RandomNumberService) { }

  ngOnInit(): void {
    this.randomNumber = this.randomService.getRandomNumber();
  }
}