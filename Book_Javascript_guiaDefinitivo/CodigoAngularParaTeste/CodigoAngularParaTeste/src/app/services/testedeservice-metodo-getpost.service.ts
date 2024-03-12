import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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
  // Criando url GET
  #getPAScontratados = signal('http://localhost:3000/pontoContratadoGET');

  // Criando url POST
  public postPAScontratados = signal(
    'http://localhost:4200/pontoContratadoPOST'
  );

  // Criando um método POST

  constructor(private http: HttpClient) {}

  public getMetodo(): Observable<any> {
    return this.http.get(this.#getPAScontratados());
  }

  public postMetodo(body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.postPAScontratados(), body, { headers });
  }
}

/*
  GET
  http://127.0.0.1:8084/pontos.contratados.api/findPontoContratado
  http://localhost:4200/pontoContratadoGET

  POST
  http://127.0.0.1:8084/pontos.contratados.api/pontoContratado
  http://localhost:4200/pontoContratadoPOST


    public postPasContratadosSimples$(body: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.#http.post(this.postPAScontratados, body, { headers });
  }

  public getPAScontratadosSImples$(): Observable<any> {
    const getPAScontratadosUrl = 'http://localhost:3000/pontoContratadoGET';
    return this.#http.get<any>(getPAScontratadosUrl);
  }


  */

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
