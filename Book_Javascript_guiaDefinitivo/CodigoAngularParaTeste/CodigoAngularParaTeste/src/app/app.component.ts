import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestedeserviceMetodoGETPOSTService } from './services/testedeservice-metodo-getpost.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CodigoAngularParaTeste';

  #apiService = inject(TestedeserviceMetodoGETPOSTService);

  // Criando um método GET
  public getPAsContratados = this.#apiService.getPasContratados;

  // Criando um método POST
  public postPAsContratados = this.#apiService.postPasContratados$;

  ngOnInit() {
    this.#apiService.GetHttpPASContratados().subscribe();
    let resposta = this.#apiService.postPasContratados$({
      id: '1',
      data: '2021-08-01',
      nome: 'nome',
      nomePosto: 'nomePosto',
    });

    console.log(resposta);
  }
}
