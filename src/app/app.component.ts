import { Component } from '@angular/core';
import { TagInputComponent } from 'ngx-chips'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = ['Pizza', 'Pasta', 'Parmesan'];



  call(event) {
    console.log(event);
  }
}
