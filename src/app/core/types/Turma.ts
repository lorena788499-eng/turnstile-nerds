import { ɵHttpInterceptingHandler } from "@angular/common/http"

export interface Turma {
    id: number,
    nome: string,
    turno: Turno,
    anoLetivo: number,
    ativa: boolean
}

export enum Turno {
     MANHA, TARDE, NOITE, INTEGRAL 
}