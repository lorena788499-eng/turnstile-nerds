import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-botao-cancelar',
  imports: [MatButtonModule],
  templateUrl: './botao-cancelar.html',
  styleUrl: './botao-cancelar.css',
})
export class BotaoCancelar {

   @Input () texto: string = "";

}
