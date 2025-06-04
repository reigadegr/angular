import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test8',
  imports: [FormsModule, CommonModule],
  templateUrl: './test8.component.html',
  styleUrl: './test8.component.scss'
})
export class Test8Component {
  submitted = false;
  formData: any = {};

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.formData = form.value;
      console.log('表单数据:', this.formData);
    }
  }
}
