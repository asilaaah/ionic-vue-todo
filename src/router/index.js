import { createRouter, createWebHistory } from '@ionic/vue-router';
import TodosPage from '../pages/TodosPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/todos'
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosPage
  },
  {
    path: '/todos/:id',
    name: 'TodoDetails',
    component: () => import('../pages/TodoDetailsPage.vue')
  },
  {
    path: '/todos/add',
    name: 'AddTodo',
    component: () => import('../pages/AddTodoPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
