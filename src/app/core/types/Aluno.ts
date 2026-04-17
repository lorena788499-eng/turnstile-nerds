import { ɵHttpInterceptingHandler } from "@angular/common/http"

export interface Aluno {
    id: number,
    nome: string,
    matricula: string,
    dataNascimento: string,
    foto: string,
    ativa: boolean
}