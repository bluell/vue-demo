import PageAddTodo from './components/PageAddTodo.vue';
import PageIndex from './components/PageIndex.vue';
import PageNotFound from './components/PageNotFound.vue';

const routes = [
  { path: '/', component: PageIndex },
  { path: '/add-task', component: PageAddTodo },
  { path: '*', component: PageNotFound }
];

export default routes;
