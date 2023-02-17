import { PessoaService, FiltroPessoa } from './../pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/core/lancamento.model';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pessoas-pesquisar',
  templateUrl: './pessoas-pesquisar.component.html',
  styleUrls: ['./pessoas-pesquisar.component.css']
})
export class PessoasPesquisarComponent implements OnInit {

  filtro = new FiltroPessoa();

  pessoas = []

  totalRegistro = 0;

  @ViewChild('tabela') grid!: Table;

  constructor(
    private pessoaService: PessoaService,
    private confirmation: ConfirmationService,
    private messagemService: MessageService,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Pessoa Pesquisa');


  //this.pesquisar();

  }

  pesquisar(pagina = 0): void {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then((resultado: any) => {
        this.totalRegistro = resultado.total
        this.pessoas = resultado.pessoas;
      });
    }


    mudarStatus(pessoa: any) {
      const novoStatus = !pessoa.ativo;

          this.pessoaService.mudarStatus(pessoa.codigo,novoStatus)
          .then(() => {
            const acao = novoStatus ? 'Ativada' : 'Desativada';

            pessoa.ativo = novoStatus;


          })

        }

        aoMudarPagina(event: LazyLoadEvent) {
          const pagina = event!.first! / event!.rows!;
          this.pesquisar(pagina);
        }


        confirmacaoExclusao(pessoa: any): void {
          this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: () => {
              this.excluir(pessoa);
              this.grid.reset();
            }
          })
        }

        excluir(pessoas: any) {
          this.pessoaService.excluir(pessoas.codigo)

            .then(() => {
              this.grid.reset();

              this.messagemService.add({ severity: 'success', detail: 'Pessoa excluída com sucesso!' })

            })


        }



}
