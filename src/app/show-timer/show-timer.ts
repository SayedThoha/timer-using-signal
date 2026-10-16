import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-show-timer',
  styleUrl: './show-timer.css',
  templateUrl: './show-timer.html',
})
export class ShowTimer {
  second = signal<number>(0);
  minute = signal<number>(0);
  intervalId: number | null = null;

  start() {
    this.intervalId = setInterval(() => {
      this.second.update((val) => val + 1);
      if (this.second() > 59) {
        this.second.set(0);
        this.minute.update((val) => val + 1);
      }
    }, 100);
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.second.set(0);
    this.minute.set(0);
    this.stop();
  }
}
