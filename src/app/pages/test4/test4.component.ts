import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-test4',
  imports: [
    RouterOutlet
  ],
  templateUrl: './test4.component.html',
  styleUrl: './test4.component.scss'
})
export class Test4Component {
  title = '07';
}
