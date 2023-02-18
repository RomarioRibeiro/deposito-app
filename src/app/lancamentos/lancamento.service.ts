import { ProdutoService } from './../produto/produto.service';
import { Lancamento, Pessoa } from './../core/lancamento.model';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
export class LancamentoFiltro {
  nome?: string
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  pagina = 0;
  intensPorPagina = 5;
}
@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  //lancamentosURL = 'http://localhost:8090/lancamentos'
 lancamentosURL = ' https://deposito-api.herokuapp.com/lancamentos'

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    ) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization',
      'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();


    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.intensPorPagina);

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('data_pagamentoDe', this.datePipe.transform(filtro.dataVencimentoInicio, 'yyyy-MM-dd')!);
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('data_pagamentoAte', this.datePipe.transform(filtro.dataVencimentoFim, 'yyyy-MM-dd')!);
    }

    return this.http.get(`${this.lancamentosURL}?resumo`, { headers, params })
      .toPromise()
      .then((response: any) => {
        const lancamentos = response['content'];

        const resultado = {
          lancamentos,
          total: response['totalElements']
        };
        return resultado;
      });
  }



  mudarStatus(codigo: number, pago: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.lancamentosURL}/${codigo}/pago`, pago, { headers })
      .toPromise();

  }


  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    .append('Content-Type', 'application/json');

      return firstValueFrom(this.http.post<Lancamento>(this.lancamentosURL, lancamento, { headers }));
  }


  excluir(codigo: number): Promise<any> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.lancamentosURL}/${codigo}`,{ headers})
    .toPromise()
    .then(() => null);
  }


  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    .append('Content-Type', 'application/json');

    return this.http.put<Lancamento>(`${this.lancamentosURL}/${lancamento.codigo}`, lancamento, { headers })
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    const headers = new HttpHeaders()
    .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
    .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.get<Lancamento>(`${this.lancamentosURL}/${codigo}`, { headers }))
    .then((response: any) => {
      this.converterStringsParaDatas([response]);
      return response;
    });

  }


  private converterStringsParaDatas(lacamentos: Lancamento[]) {
    for (const lancamento of lacamentos) {
      let offset = new Date().getTimezoneOffset() * 60000;
      lancamento.data_fiado = new Date(new Date(lancamento.data_fiado!).getTime() + offset);
      console.log(lancamento.data_fiado);

      if (lancamento.data_pagamento) {
        lancamento.data_pagamento = new Date(new Date(lancamento.data_pagamento).getTime() + offset);
      }
    }
  }
}



