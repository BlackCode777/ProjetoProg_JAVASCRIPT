import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestedeserviceMetodoGETPOSTService } from './services/testedeservice-metodo-getpost.service';

interface IPAsCadastrados {
  id: string;
  data: string;
  nome: string;
  nomePosto: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    //Router,
    // HttpClient
    //TestedeserviceMetodoGETPOSTService,
  ],
  //providers: [provideHttpClient(withFetch())],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CodigoAngularParaTeste';

  //#apiService = inject(TestedeserviceMetodoGETPOSTService);

  constructor(private apiService: TestedeserviceMetodoGETPOSTService) {}
  //public getPAsContratados = this.apiService.getPAScontratados$;
  public pAsContratadosArrayGet: IPAsCadastrados[] = [];
  // Criando um método POST
  //public postPAsContratados = this.apiService.postPasContratados$;
  public pAsContratadosArrayPost: IPAsCadastrados[] = [];

  ngOnInit() {
    this.getPAsContratadosFunc();
    this.postPAsContratadosFunc({
      id: '1',
      data: '2021-10-10',
      nome: 'nome',
      nomePosto: 'nomePosto',
    });
  }

  public postPAsContratadosFunc(response: any) {
    // chamando o método POST
    this.apiService.postMetodo(response).subscribe((res) => {
      this.pAsContratadosArrayPost = res;
      console.log('POST_res', res);
    });
  }

  public getPAsContratadosFunc() {
    // chamando o método GET
    this.apiService.getMetodo().subscribe((res) => {
      this.pAsContratadosArrayGet = res;
      console.log('GET_res', res);
    });
  }

  /*
  public getPAsContratadosFunc() {
    // chamando o método GET
    this.apiService.getPAScontratadosSImples$().subscribe((res) => {
      this.pAsContratadosArrayGet = res;
    });
  }

  public postPAsContratadosFunc(response: any) {
    // chamando o método POST
    this.apiService.postPasContratadosSimples$(response).subscribe((res) => {
      this.pAsContratadosArrayPost = res;
    });
  }
  */

  // Método POST
  // public postPAsContratadosFunc(response: any) {
  //   this.postPAsContratados(response).subscribe({
  //     next: (res) => {
  //       this.pAsContratadosArrayPost = res;
  //     },
  //     error: (error) => {
  //       console.error('Erro ao tentar cadastrar o PAS', error);
  //     },
  //   });
  // }
}
