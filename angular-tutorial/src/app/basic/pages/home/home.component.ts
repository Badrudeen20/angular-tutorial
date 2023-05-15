import { Component } from '@angular/core';
import { GlobalService } from '../../services/index.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {
  title = 'todo-app';
  constructor(private Gservice: GlobalService) {
    console.log(this.Gservice.product);
  }
 
}
