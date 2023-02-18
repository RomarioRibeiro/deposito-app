import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pessoa } from '../core/lancamento.model';

export class FiltroPessoa {
nome?: string;
pagina = 0;
intensPagina = 5;
}



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //pessoasURL = 'http://localhost:8090/pessoas';
  pessoasURL = ' https://deposito-api.herokuapp.com/pessoas';


  constructor(private http: HttpClient) { }


  pesquisar(filtro: FiltroPessoa): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();

    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.intensPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.pessoasURL}?resumo`, { headers, params })
      .toPromise()
      .then((response: any) => {
        const pessoas = response['content'];

        const resultado = {
          pessoas,
          total: response['totalElements']
        };
        return resultado;
      });


  }




  listarPessoas(): Promise<any> {
    /* const headers = new HttpHeaders()
    .append(); */
    return this.http.get(`${this.pessoasURL}`).toPromise();
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.pessoasURL}/${codigo}/ativo`, ativo, { headers })
      .toPromise();

  }


  adicionarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<Pessoa>(this.pessoasURL, pessoa, { headers }));
  }

  excluir(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.pessoasURL}/${codigo}`, { headers })
      .toPromise()
      .then(() => null);
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    const headers = new HttpHeaders()
        .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

        return firstValueFrom(this.http.get<Pessoa>(`${this.pessoasURL}/${codigo}`, { headers }))

  }


  atualizarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<Pessoa>(`${this.pessoasURL}/${pessoa.codigo}`, pessoa, { headers })
      .toPromise()
      .then((response: any) => {


        return response;
      });
  }

}
