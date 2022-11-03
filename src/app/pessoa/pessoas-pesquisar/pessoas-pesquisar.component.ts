import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisar',
  templateUrl: './pessoas-pesquisar.component.html',
  styleUrls: ['./pessoas-pesquisar.component.css']
})
export class PessoasPesquisarComponent implements OnInit {


  pessoas = [
    {nome: 'Romario Ribeiro', rua: 'Espanha', numero: '157', bairro: 'Jardim das Acacias', ativo: true},
    {nome: 'João das Couves', rua: 'Alemanha', numero: '200', bairro: 'Centro', ativo: true},
    {nome: 'Maria De Oliveira', rua: 'Protugual', numero: '144', bairro: 'Limão', ativo: true},
    {nome: 'José da Silva', rua: 'São Paulo', numero: '180', bairro: 'Jardim das Flores', ativo: true},
    {nome: 'Mario Oliveira', rua: 'Alemanha', numero: '210', bairro: 'Centro', ativo: true},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
