// app.component.ts
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent9 {
  title = 'your-app-title';
}
