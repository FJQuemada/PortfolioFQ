import { Component } from '@angular/core';

@Component({
  selector: 'app-conocimientos-component',
  imports: [],
  templateUrl: './conocimientos-component.html',
  styleUrl: './conocimientos-component.css',
})
export class ConocimientosComponent {
  conocimientosBackend: { nombre: string; imagen: string }[] = [
    { nombre: 'Spring Boot', imagen: 'assets/logos/backend/spring.svg' },
    { nombre: 'JavaScript', imagen: 'assets/logos/backend/javascript.svg' },
    { nombre: 'Java', imagen: 'assets/logos/backend/java.svg' },
    { nombre: 'Node.js', imagen: 'assets/logos/backend/nodejs.svg' },
    { nombre: 'Python', imagen: 'assets/logos/backend/python.svg' },
    { nombre: 'Django', imagen: 'assets/logos/backend/django.svg' },
  ];
  conocimientosFrontend: { nombre: string; imagen: string }[] = [
    { nombre: 'React', imagen: 'assets/logos/frontend/react.svg' },
    { nombre: 'Angular', imagen: 'assets/logos/frontend/angular.svg' },
    { nombre: 'TailwindCSS', imagen: 'assets/logos/frontend/tailwindcss.svg' },
  ];
  conocimientosDatabase: { nombre: string; imagen: string }[] = [
    { nombre: 'MySQL', imagen: 'assets/logos/database/mysql.svg' },
    { nombre: 'PostgreSQL', imagen: 'assets/logos/database/postgresql.svg' },
  ];
  conocimientosTools: { nombre: string; imagen: string }[] = [
    { nombre: 'Git', imagen: 'assets/logos/tools/git.svg' },
    { nombre: 'Docker', imagen: 'assets/logos/tools/docker.svg' },
  ];
}
