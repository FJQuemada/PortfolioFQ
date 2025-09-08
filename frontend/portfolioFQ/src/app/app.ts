import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar-component/navbar-component';
import { AboutMe } from './about-me/about-me';
import { IntroduccionComponent } from './introduccion-component/introduccion-component';
import { ConocimientosComponent } from './conocimientos-component/conocimientos-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    AboutMe,
    IntroduccionComponent,
    ConocimientosComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'projectA';
}
