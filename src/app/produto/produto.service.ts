import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //produtosURL = 'http://localhost:8090/produtos';
 produtosURL = ' https://deposito-api.herokuapp.com/produtos';

  constructor(private http: HttpClient) { }


  listarTodas(): Promise<any> {
    /* const headers = new HttpHeaders()
    .append(); */
    return this.http.get(`${this.produtosURL}`).toPromise();
  }
}
