import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-proyecto-component',
  imports: [NgClass],
  templateUrl: './proyecto-component.html',
  styleUrl: './proyecto-component.css',
})
export class ProyectoComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() img = '';
  @Input() url = '';
  @Input() frameworks: string[] = [];
  @Input() isReversed: boolean = true;
}
