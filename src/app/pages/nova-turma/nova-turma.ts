import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { BotaoCancelar } from "../../shared/botao-cancelar/botao-cancelar";
import { BotaoConfirmar } from "../../shared/botao-confirmar/botao-confirmar";


@Component({
  selector: 'app-nova-turma',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, BotaoCancelar, BotaoConfirmar,],
  templateUrl: './nova-turma.html',
  styleUrl: './nova-turma.css',
})
export class NovaTurma {}
