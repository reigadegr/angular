import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
  private readonly randomValue: number;

  constructor() {
    this.randomValue = Math.random();
  }

  getRandomNumber(): number {
    return this.randomValue;
  }

  generateNewRandomNumber(): number {
    return Math.random();
  }
}