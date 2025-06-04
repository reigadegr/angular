import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PetsComponent} from './pets/pets.component'

@Component({
  selector: 'app-test9',
  imports: [
    RouterOutlet, PetsComponent, RouterLink
  ],
  templateUrl: './test9.component.html',
  styleUrl: './test9.component.scss'
})
export class Test9Component {
  title = 'your-app-title';
}
