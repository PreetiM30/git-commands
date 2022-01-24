import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

  users = [];
  pushUser(data) {
    this.users.push(data);
  }

  onRemoveItem(item) {
    this.users.splice(item, 1);
  }
}
