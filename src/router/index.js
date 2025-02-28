import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  AddTask  from '../components/AddTasks/AddTasks.vue'
import EditTask from '../components/EditTaskCompenent/EditTasksCompenent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/addtask',
    name : 'addtask',
    component : AddTask
  },
  {
    path: '/edittask/:id',
    name: 'edittask',
    component: EditTask,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
