export class Lancamento {
  codigo?: number;
  descricao?: string;
  data_fiado?: Date;
  data_pagamento?: Date;
  valor?: number;
  observacao?: string;
  pessoa = new Pessoa();
  produto = new Produto();
}

export class Produto {
  codigo?: number;
  descricao?: string;
  preco?: number;
}


export class Pessoa {
  codigo?: number;
  nome?: string;
  rua?: string;
  bairro?: string;
  numero?: number;
  telefone?: number;
  ativo = true;
}
