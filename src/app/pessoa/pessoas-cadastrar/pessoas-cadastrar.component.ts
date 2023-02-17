import { Pessoa } from './../../core/lancamento.model';
import { PessoaService } from './../pessoa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoas-cadastrar',
  templateUrl: './pessoas-cadastrar.component.html',
  styleUrls: ['./pessoas-cadastrar.component.css']
})
export class PessoasCadastrarComponent implements OnInit {

pessoa = new Pessoa()

  constructor(
    private pessoaService: PessoaService,
    private messagemService: MessageService,
    private router: Router,
    private routes: ActivatedRoute,
    private title: Title,
    ) { }

  ngOnInit(): void {
    const codigoPessoa = this.routes.snapshot.params['codigo']

    this.title.setTitle('Nova Pessoa')

    if(codigoPessoa && codigoPessoa !== 'novo') {
      this.carregarPessoa(codigoPessoa);
    }

  }


  carregarPessoa(codigo: number)  {
    this.pessoaService.buscarPorCodigo(codigo)
    .then((pessoa: Pessoa) => {
      this.pessoa = pessoa;
      this.atualizarTituloEdicao();
    })


  }

  get editando() {
    return Boolean(this.pessoa.codigo)
  }

  salverPessoa(form: NgForm) {
    if(this.editando) {
      this.atualizarPessoas(form);
    }else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: NgForm) {
    this.pessoaService.adicionarPessoa(this.pessoa)
    .then(() => {

      this.messagemService.add({ severity: 'success', detail: 'Pessoa criado com sucesso!' });
      form.reset();
      this.pessoa = new Pessoa();
    })


  }


  novo(form: NgForm) {
    this.router.navigate(['/pessoas/novo'])

  setTimeout(() => {
    this.pessoa = new Pessoa();
  }, 1)
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edidamdo Pessoa: ${this.pessoa.nome}`)
  }


  atualizarPessoas(form: NgForm) {
    this.pessoaService.atualizarPessoa(this.pessoa)
    .then((pessoa: Pessoa) => {
      this.pessoa = pessoa;
      this.atualizarTituloEdicao();

      this.messagemService.add({ severity: 'success', detail: 'Pessoa Editado com sucesso!' });


    })


  }


}
