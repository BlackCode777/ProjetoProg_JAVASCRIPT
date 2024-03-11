import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs/internal/operators/shareReplay';
import { tap } from 'rxjs/internal/operators/tap';

interface IPAsCadastrados {
  id: string;
  data: string;
  nome: string;
  nomePosto: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestedeserviceMetodoGETPOSTService {
  // GET
  // http://127.0.0.1:8084/pontos.contratados.api/findPontoContratado
  // POST
  // http://127.0.0.1:8084/pontos.contratados.api/pontoContratado

  #http = inject(HttpClient);
  #getPAScontratados = signal(
    'http://127.0.0.1:8084/pontos.contratados.api/findPontoContratado'
  );

  // Criando url POST
  #postPAScontratados = signal(
    'http://127.0.0.1:8084/pontos.contratados.api/pontoContratado'
  );

  // Criando um signal para armazenar os dados
  #setPasContratados = signal<IPAsCadastrados | null>(null);

  // Criando um método POST
  postPasContratados$(body: IPAsCadastrados): Observable<IPAsCadastrados> {
    return this.#http
      .post<IPAsCadastrados>(this.#postPAScontratados(), { body })
      .pipe(
        shareReplay(),
        tap((res) => this.#setPasContratados.set(res))
      );
  }

  // Criando um método GET
  get getPasContratados() {
    return this.#getPAScontratados.asReadonly();
  }
  public GetHttpPASContratados(): any {
    this.#http
      .get<IPAsCadastrados>(this.#getPAScontratados())
      .subscribe((res) => this.#setPasContratados.set(res));
  }

  // constructor() {}
}
/* 
    #http = inject(HttpClient);
    #apiPAScontratados = signal(environment.api);
 
    #setPostPAS = signal<IPAsCadastrados | null>(null);
    public postListPAS = this.#setPostPAS;
 
    #setPasContratados = signal<IPAsCadastrados | null>(null)
    getPasContratados(){
        return this.#setPasContratados.asReadonly();
    }
 
    //Método para adicionar um novo indicador usando POST
    createIndicador$(body: any): Observable<IPAsCadastrados> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.#http.post<IPAsCadastrados>(this.#apiPAScontratados(), { body })
        .pipe(
            shareReplay(),
            tap((res) => this.#setPostPAS.set(res))
        );
    }
*/
