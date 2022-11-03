import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {


tipos = [
  {label: 'Fiado', value: 'FIADO'},
  {label: 'Avista', value: 'Avista'}
];

categorias = [
  {label: 'Gás', value: '1'}
]

pessoas =  [
  {label: 'Romário Ribeiro', value: '1'},
  {label: 'Mario Oliveira', value: '2'}
]

  constructor() { }

  ngOnInit(): void {
  }

}
