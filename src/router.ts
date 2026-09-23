import type { RouteRecordRaw } from 'vue-router'
import HomeView from './views/HomeView.vue'
import PedagogiaView from './views/PedagogiaView.vue'
import TurmasView from './views/TurmasView.vue'
import RotinaView from './views/RotinaView.vue'
import ContatoView from './views/ContatoView.vue'
import NotFoundView from './views/NotFoundView.vue'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  { path: '/pedagogia-waldorf', component: PedagogiaView },
  { path: '/turmas', component: TurmasView },
  { path: '/rotina', component: RotinaView },
  { path: '/contato', component: ContatoView },
  { path: '/:pathMatch(.*)*', component: NotFoundView },
]
