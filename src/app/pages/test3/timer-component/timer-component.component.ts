import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-component',
  templateUrl: './timer-component.component.html',
  styleUrls: ['./timer-component.component.css']
})
export class TimerComponent {
  time = 0;
  timer: any;

  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.time++;
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  resetTimer() {
    this.stopTimer();
    this.time = 0;
  }
}    