import { Turno } from "./Turma"

export interface TurmaUpdateForm{
    nome:string,
    turno:Turno,
    anoLetivo:number,
    ativo:boolean
}