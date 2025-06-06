import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewRandomComponent } from './new-random/new-random.component';
import { DifferentRandomComponent } from './different-random/different-random.component';
import { SameRandomComponent } from './same-random/same-random.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NewRandomComponent,DifferentRandomComponent,SameRandomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent9 {
  title = '02';
}
