import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* 👇 ADICIONA ISSO */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nova-turma',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './nova-turma.html',
  styleUrls: ['./nova-turma.css']
})
export class NovaTurma {

  turma = {
    nome: '',
    periodo: '', // continua normal
    ano: '',
    capacidade: 0,
    professor: ''
  };

  salvar() {
    console.log('Dados da turma:', this.turma);
    alert('Turma salva com sucesso!');
  }
}