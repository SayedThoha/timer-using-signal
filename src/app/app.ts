import { Component, signal } from '@angular/core';
import { ShowTimer } from './show-timer/show-timer';

@Component({
  imports: [ShowTimer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('stop-watch');
}
