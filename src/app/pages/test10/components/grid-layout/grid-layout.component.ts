import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-grid-layout',
  standalone: true,
  imports: [
    CommonModule,
    NzDividerModule,  // 添加分割线模块
    NzGridModule      // 添加网格布局模块
  ],
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css']
})
export class GridLayoutComponent {
  // 组件逻辑可以留空或添加你需要的功能
}