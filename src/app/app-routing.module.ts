import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisarComponent } from './lancamentos/lancamento-pesquisar/lancamento-pesquisar.component';

const routes: Routes = [
  {path: '', redirectTo:'lancameto', pathMatch: 'full' },
  {path: 'lancamento', component: LancamentoPesquisarComponent},
  {path: 'lancamento/novo', component: LancamentoCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
