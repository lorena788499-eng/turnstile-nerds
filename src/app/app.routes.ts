import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Navegacao } from './layouts/navegacao/navegacao';
import { Dashboard } from './pages/dashboard/dashboard';
import { Turmas } from './pages/turmas/turmas';
import { Alunos } from './pages/alunos/alunos';
import { DadosAluno } from './pages/dados-aluno/dados-aluno';
import { EditarTurma } from './pages/editar-turma/editar-turma';
import { EsqueciASenha } from './pages/esqueci-a-senha/esqueci-a-senha';
import { EditarAluno } from './pages/editar-aluno/editar-aluno';
import { Ocorrencias } from './pages/ocorrencias/ocorrencias';
import { ControleDeFaltas } from './pages/controle-de-faltas/controle-de-faltas';
import { MinhaConta } from './pages/minha-conta/minha-conta';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { CadastroUsuario } from './pages/cadastro-usuario/cadastro-usuario';
import { NovaTurma } from './pages/nova-turma/nova-turma';

export const routes: Routes = [

    {
        path: "login",
        component: Login
    },
    {
        path: "esqueci-a-senha",
        component: EsqueciASenha
    },

    {
        path: "",
        component: Navegacao,
        children: [
            {
                path: "dashboard",
                component: Dashboard
            },
            {
                path: "turmas",
                component: Turmas
            },
            {
                path: "editar-turma",
                component: EditarTurma
            },
            {
                path: "alunos",
                component: Alunos
            },
            {
                path: "dados-aluno",
                component: DadosAluno
            },
            {
                path: "editar-aluno",
                component: EditarAluno
            },
            {
                path: "dados-aluno",
                component: DadosAluno
            },
            {
                path: "ocorrencias",
                component: Ocorrencias
            },
            {
                path: "controle-de-faltas",
                component: ControleDeFaltas
            },
            {
                path: "minha-conta",
                component: MinhaConta
            },
            {
                path: "alterar-senha",
                component: AlterarSenha
            },
            {
                path: "cadastro-de-usuario",
                component: CadastroUsuario
            },
            {
                path: "nova-turma",
                component: NovaTurma
            },


        ]
    }

];