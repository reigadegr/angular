import { Component } from '@angular/core';
import { ColorChangeComponent } from './color-change/color-change.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test5',
  imports: [ColorChangeComponent, CommonModule],
  templateUrl: './test5.component.html',
  styleUrl: './test5.component.scss'
})
export class Test5Component {
  title = 'color-change-app';
}
