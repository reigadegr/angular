import { Component } from '@angular/core';
import { ConditionalDisplayComponent } from './conditional-display/conditional-display.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test6',
  imports: [ConditionalDisplayComponent, CommonModule],
  templateUrl: './test6.component.html',
  styleUrl: './test6.component.scss'
})
export class Test6Component {
  title = 'conditional-display-app';
}
