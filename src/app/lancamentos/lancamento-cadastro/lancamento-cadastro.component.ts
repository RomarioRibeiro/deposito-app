import { PessoaService } from './../../pessoa/pessoa.service';
import { ProdutoService } from './../../produto/produto.service';
import { Lancamento } from './../../core/lancamento.model';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {


  lancamento = new Lancamento();

tipos = [
  {label: 'Fiado', value: 'FIADO'},
  {label: 'Avista', value: 'Avista'}
];

produtos = []

pessoas =  []

  constructor(
    private pessoasService: PessoaService,
    private produtoService: ProdutoService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private routes: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit(): void {
    const codigoLancamento =this.routes.snapshot.params['codigo']

    this.title.setTitle('Novo lançamento')

    if(codigoLancamento && codigoLancamento !== 'novo') {
      this.carregarLancamento(codigoLancamento);
    }
    this.carregarProduto();
    this.carregarPessoas();
  }


  carregarLancamento(codigo: number) {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then(lancamento => {
      this.lancamento = lancamento
      this.atualizarTituloEdicao()
    })

  }

  get editando() {
    return Boolean(this.lancamento.codigo)
  }

  salvar(form: NgForm) {
    if(this.editando) {
      this.atualizarLancamento(form);

    }else {
      this.adicionarLancamento(form);
    }
  }


  adicionarLancamento(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento)
    .then(lancamentoAdicionado => {


      // form.reset();
      // this.lancamento = new Lancamento();
     this.router.navigate(['/lancamento'])
    })

  }

  novo(form: NgForm) {
    this.router.navigate(['/lancamentos/novo'])

    setTimeout(() => {
      this.lancamento = new Lancamento();
    }, 1)
  }

  carregarProduto() {
    this.produtoService.listarTodas()
    .then(produtos => {
      this.produtos = produtos.map((c: { descricao: any; codigo: any; }) =>({label: c.descricao, value: c.codigo }));
    })

  }

  carregarPessoas() {
    this.pessoasService.listarPessoas()
    .then(pessoas => {
      this.pessoas = pessoas.map((p: { nome: any; codigo: any; }) => ({label: p.nome, value: p.codigo}));
    })
  }

  atualizarLancamento(form: NgForm) {
    this.lancamentoService.atualizar(this.lancamento)
      .then((lancamento: Lancamento) => {
        this.lancamento = lancamento;
        this.atualizarTituloEdicao()
        this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!' });
      })
  }

  atualizarTituloEdicao() {

    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`)
  }

}
