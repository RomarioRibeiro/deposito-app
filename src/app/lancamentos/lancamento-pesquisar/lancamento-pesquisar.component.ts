import { Lancamento } from './../../core/lancamento.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LancamentoFiltro, LancamentoService } from '../lancamento.service';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-lancamento-pesquisar',
  templateUrl: './lancamento-pesquisar.component.html',
  styleUrls: ['./lancamento-pesquisar.component.css']
})
export class LancamentoPesquisarComponent implements OnInit {

  totalRegistro = 0;
  filtro = new LancamentoFiltro


  @ViewChild('tabela') grid!: Table;
  lancamentos: any[] = []


  constructor(
    private lancamentoService: LancamentoService,
    private messagemService: MessageService,
    private confimationService: ConfirmationService,
    private title: Title
    ) { }

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de lançamentos')

    //this.pesquisar();
  }

pesquisar(pagina = 0): void {
this.filtro.pagina = pagina;

this.lancamentoService.pesquisar(this.filtro)
.then(resultado =>  {
  this.totalRegistro = resultado.total
  this.lancamentos = resultado.lancamentos
})

}

aoMudarPagina(event: LazyLoadEvent) {
  const pagina = event!.first! / event!.rows!;
  this.pesquisar(pagina)
}


mudarStatus(lancamento: any) {
  const novoStatus = !lancamento.pago;

      this.lancamentoService.mudarStatus(lancamento.codigo,novoStatus)
      .then(() => {
        const acao = novoStatus ? 'Pagar' : 'Não Pago';

        lancamento.pago = novoStatus;


      })

    }

    confimacaoExclusao(lancamento: any) {
      this.confimationService.confirm({
        message: 'Tem certeza que deseja excluir?',
        accept: () => {
          this.excluir(lancamento);
        }
      })
    }

    excluir(lancamento: any) {
      this.lancamentoService.excluir(lancamento.codigo)
      .then(() =>{
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.reset();
        }
        this.messagemService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
    })

    }




}
