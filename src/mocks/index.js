import computador from '../assets/img/computador.png';
import atividadeFisica from '../assets/img/atividadeFisica.png';
import leitura from '../assets/img/leitura.png';
import musica from '../assets/img/musica.png';

const task = {
    cabecalho: {
        title: 'Native Tracker',
        description: 'Organize suas tarefas e visualize seus hábitos',
    },
    notas: {
        title: 'Minhas tarefas',
        itens: [
            {
                id: 1,
                nome: 'Estudar React Native',
                ico: leitura,
                status: true,
            },
            {
                id: 2,
                nome: 'Sonegar imposto',
                ico: computador,
                status: true,
            },
            {
                id: 3,
                nome: 'Correr 5km',
                ico: atividadeFisica,
                status: true,
            },
            {
                id: 4,
                nome: 'Praticar gaita',
                ico: musica,
                status: true,
            },
            {
                id: 5,
                nome: 'Comprar café na Amazon',
                ico: computador,
                status: true,
            },
        ]
    },
    habits: {
        title: 'Meus hábitos',
        itens: [
            {
                id: 1,
                name: 'Correr',
                days: [
                    { active: true, alias: 'D' },
                    { active: false, alias: 'S' },
                    { active: true, alias: 'T' },
                    { active: false, alias: 'Q' },
                    { active: false, alias: 'Q' },
                    { active: false, alias: 'S' },
                    { active: false, alias: 'S' },
                ],
                ico: atividadeFisica,
            },
            {
                id: 2,
                name: 'Leitura',
                days: [
                    { active: true, alias: 'D' },
                    { active: true, alias: 'S' },
                    { active: true, alias: 'T'},
                    { active: false, alias: 'Q' },
                    { active: false, alias: 'Q' },
                    { active: true, alias: 'S' },
                    { active: false, alias: 'S' },
                ],
                ico: leitura,
            },
        ]
    },   
    
}

export default task
