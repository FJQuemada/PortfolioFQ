import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  secciones: { nombre: string; enlace: string }[] = [
    { nombre: 'Inicio', enlace: '#containerInicio' },
    { nombre: 'Sobre mí', enlace: '#containerSobreMi' },
    { nombre: 'Conocimientos', enlace: '#containerConocimientos' },
    { nombre: 'Proyectos', enlace: '#containerProyectos' },
    { nombre: 'Experiencia', enlace: '#containerExperiencia' },
    { nombre: 'Contacto', enlace: '#containerContacto' },
  ];
}
