import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisar',
  templateUrl: './lancamento-pesquisar.component.html',
  styleUrls: ['./lancamento-pesquisar.component.css']
})
export class LancamentoPesquisarComponent implements OnInit {

  lancamentos = [
    {categoria: 'Gas', pessoa: 'Romario Ribeiro', valor: '130', dataFiado: '01/11/2022', dataPagamento: '10/12/2022', pago: false},
    {categoria: 'Gas', pessoa: 'Mario Ribeiro', valor: '130', dataFiado: '01/10/2022', dataPagamento: '10/11/2022', pago: true},
    {categoria: 'Gas', pessoa: 'Marli Silva', valor: '130', dataFiado: '01/11/2022', dataPagamento: '10/12/2022', pago: false},
    {categoria: 'Gas', pessoa: 'Roger De Oliveira', valor: '130', dataFiado: '01/11/2022', dataPagamento: '10/12/2022', pago: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
