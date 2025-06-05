import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-button-icon-divider',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzIconModule, NzDividerModule],
  templateUrl: './button-icon-divider.component.html',
  styleUrls: ['./button-icon-divider.component.css']
})
export class ButtonIconDividerComponent {
  // 组件逻辑
}