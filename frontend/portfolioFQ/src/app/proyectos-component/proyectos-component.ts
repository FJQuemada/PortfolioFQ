import { Component } from '@angular/core';
import { ProyectoComponent } from '../proyecto-component/proyecto-component';
import ProyectoJson from '../../assets/projects.json';

@Component({
  selector: 'app-proyectos-component',
  imports: [ProyectoComponent],
  templateUrl: './proyectos-component.html',
  styleUrls: ['./proyectos-component.css'],
})
export class ProyectosComponent {
  proyectos = ProyectoJson;
}
