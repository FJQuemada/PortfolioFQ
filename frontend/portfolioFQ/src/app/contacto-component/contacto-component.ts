import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-component',
  imports: [],
  templateUrl: './contacto-component.html',
  styleUrl: './contacto-component.css',
})
export class ContactoComponent {
  // Método para descargar el CV, creando un enlace temporal
  descargarCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/CVFranciscoJavierQuemada.pdf';
    link.download = 'CVFranciscoJavierQuemada.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
