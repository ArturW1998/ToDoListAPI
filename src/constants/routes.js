import Home from '../components/Home';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import NoMatch from '../components/NoMatch';

const ROUTES = [
  {
    id: 'Home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    id: 'Tasks',
    exact: true,
    path: '/tasks',
    component: Todo,
  },
  {
    id: 'New',
    exact: false,
    path: '/tasks/new',
    component: TodoForm,
  },
  {
    id: 'Task',
    exact: true,
    path: '/tasks/:id',
    component: TodoItem,
  },
  {
    id: 'Edit',
    exact: false,
    path: '/tasks/:id/edit',
    component: TodoForm,
  },
  {
    id: 'NoMatch',
    exact: false,
    component: NoMatch,
  },
];

export default ROUTES;
