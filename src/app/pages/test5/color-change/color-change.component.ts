import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-color-change',
    templateUrl: './color-change.component.html',
    styleUrls: ['./color-change.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class ColorChangeComponent {
    randomColor(): string {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    styleObject = {
        color: this.randomColor(),
        backgroundColor: this.randomColor(),
        border: `2px solid ${this.randomColor()}`,
        fontSize: `${Math.floor(Math.random() * 20 + 12)}px`,
        fontStyle: ['normal', 'italic'][Math.floor(Math.random() * 2)]
    };

    constructor() {
        setInterval(() => {
            this.styleObject = {
                color: this.randomColor(),
                backgroundColor: this.randomColor(),
                border: `2px solid ${this.randomColor()}`,
                fontSize: `${Math.floor(Math.random() * 20 + 12)}px`,
                fontStyle: ['normal', 'italic'][Math.floor(Math.random() * 2)]
            };
        }, 1000);
    }

    isClicked = false;
    isHovered = false;

    toggleClass() {
        this.isClicked = !this.isClicked;
    }

    onMouseEnter() {
        this.isHovered = true;
    }

    onMouseLeave() {
        this.isHovered = false;
    }
}    