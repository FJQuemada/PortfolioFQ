import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  username: string = 'John Doe';

  greet() {
    console.log(this.username);
    return `Hello, ${this.username}!`;
  }
}
