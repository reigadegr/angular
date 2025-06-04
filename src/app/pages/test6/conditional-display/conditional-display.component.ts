import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-conditional-display',
    templateUrl: './conditional-display.component.html',
    styleUrls: ['./conditional-display.component.css'],
    imports: [CommonModule, FormsModule],
    standalone: true
})
export class ConditionalDisplayComponent {
    selectedOption: string = 'option1';
    showExtraInfo: boolean = false;

    onOptionChange(event: any) {
        this.selectedOption = event.target.value;
    }

    toggleExtraInfo() {
        this.showExtraInfo = !this.showExtraInfo;
    }
}    