import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { LancamentoPesquisarComponent } from "./lancamentos/lancamento-pesquisar/lancamento-pesquisar.component";
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';



import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
declarations: [
  NavBarComponent,
  LancamentoPesquisarComponent,
  LancamentoCadastroComponent
],
imports: [
  ButtonModule,
  SidebarModule,
  RouterModule,
  InputTextModule,
  TableModule,
  TooltipModule,
  SelectButtonModule,
  CalendarModule,
  FormsModule
],
exports: [
  NavBarComponent,
  LancamentoPesquisarComponent,
  LancamentoCadastroComponent
]

})
export class PrimengModule{}
