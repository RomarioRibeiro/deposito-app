import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosURL = 'http://localhost:8080/lancamentos'

  constructor(private http: HttpClient) { }
}
