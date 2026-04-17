import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TurmaForm } from '../types/TurmaForm';
import { Turma } from '../types/Turma';
import { TurmaUpdateForm } from '../types/TurmaUpdateForm';
import { API_CONFIG } from '../../config/API_CONFIG';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  private http = inject(HttpClient);
  private baseUrl = API_CONFIG.baseUrl;

  criar(turma: TurmaForm): Observable<Turma> {
    return this.http.post<Turma>(`http://localhost:8080/turmas`, turma);
  }

  deletar(id:number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/turmas/${id}`);
  }

  editar(id:number, turma: TurmaUpdateForm): Observable<Turma> {
    return this.http.put<Turma>(`http://localhost:8080/turmas/${id}`, turma);
  }


}

