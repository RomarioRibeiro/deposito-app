import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categoriaURL = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient) { }


  listarTodas(): Promise<any> {
    /* const headers = new HttpHeaders()
    .append(); */
    return this.http.get(`${this.categoriaURL}`).toPromise();
  }
}
