import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { LancamentoPesquisarComponent } from "./lancamentos/lancamento-pesquisar/lancamento-pesquisar.component";
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoasPesquisarComponent } from './pessoa/pessoas-pesquisar/pessoas-pesquisar.component';
import { PessoasCadastrarComponent } from './pessoa/pessoas-cadastrar/pessoas-cadastrar.component';



import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CommonModule, DatePipe } from '@angular/common';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion'; // accordion and accordion tab


@NgModule({
declarations: [
  NavBarComponent,
  LancamentoPesquisarComponent,
  LancamentoCadastroComponent,
  PessoasPesquisarComponent,
  PessoasCadastrarComponent,
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
  FormsModule,
  InputNumberModule,
  DropdownModule,
  InputTextareaModule,
  DatePipe,
  MessageModule,
  MessagesModule,
  CommonModule,
  InputMaskModule,
  ConfirmDialogModule,
  ToastModule,
  CardModule



],
exports: [
  NavBarComponent,
  LancamentoPesquisarComponent,
  LancamentoCadastroComponent,
  PessoasPesquisarComponent,
  PessoasCadastrarComponent,

]

})
export class PrimengModule{}
