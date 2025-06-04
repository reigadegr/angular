import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cylinder-calculator',
    templateUrl: './cylinder-calculator.component.html',
    styleUrls: ['./cylinder-calculator.component.css'],
    imports: [FormsModule, CommonModule],
    standalone: true
})
export class CylinderCalculatorComponent {
    // 初始化属性
    radius: number = 0;
    height: number = 0;
    surfaceArea: number = 0;
    volume: number = 0;

    calculate() {
        if (this.radius && this.height) {
            this.surfaceArea = this.calculateSurfaceArea();
            this.volume = this.calculateVolume();
        }
    }

    calculateSurfaceArea() {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }

    calculateVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}    