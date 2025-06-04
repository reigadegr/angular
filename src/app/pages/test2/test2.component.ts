import { Component } from '@angular/core';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
@Component({
  selector: 'app-test2',
  imports: [ComponentOneComponent, ComponentTwoComponent, ComponentThreeComponent],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component {
  title = '2025年测试信息';
}
