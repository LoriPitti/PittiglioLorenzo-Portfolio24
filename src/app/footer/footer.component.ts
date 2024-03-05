import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  confermaUscita(event: MouseEvent): void {
    const conferma = confirm("Attenzione, stai per lasciare la pagina. Procedere?");
    if (!conferma) {
      event.preventDefault(); // Evita l'apertura del link
    }
  }
}
