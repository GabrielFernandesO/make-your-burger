//CRIAÇÃO DAS ROTAS, NAS QUAIS TEM DE IMPORTAR O CREATEROTER, CREATEWEHISTORY
//JA DE CARA JA FOI IMPORTADO O ARQUIVO HOMEVIEW DA PASTA VIEWS
//ASSIM É CRIADO UMA CONST DE ROUTER PARA INICIAR A CRIAÇÃO DO ROUTER
//POR FIM VEM AS ROTAS CRIADAS E DESEJADAS, NO CASO SÃO SÓ DUAS, A HOME, COM SEU NOME E SEU COMPONENTE IMPORTADO DA PASTA VIEW
//E A ROTA PEDIDOS, COM SEU COMPONENTE TAMBÉM IMPORTADO.
//NOTE QUE PATH É O CAMINHO DA ROTA NAME O NAME MESMO E O COMPONENTE É O DIRETÓRIO DO ARQUIVO DENTRO DO PROJETO.

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
