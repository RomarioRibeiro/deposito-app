import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisarComponent } from './lancamentos/lancamento-pesquisar/lancamento-pesquisar.component';
import { PessoasCadastrarComponent } from './pessoa/pessoas-cadastrar/pessoas-cadastrar.component';
import { PessoasPesquisarComponent } from './pessoa/pessoas-pesquisar/pessoas-pesquisar.component';

const routes: Routes = [
  {path: '', redirectTo:'lancameto', pathMatch: 'full' },
  {path: 'lancamento', component: LancamentoPesquisarComponent},
  {path: 'lancamento/novo', component: LancamentoCadastroComponent},
  {path: 'pessoas', component: PessoasPesquisarComponent},
  {path: 'pessoas/novo', component: PessoasCadastrarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
