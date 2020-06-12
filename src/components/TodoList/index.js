import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Paper, List, Divider } from '@material-ui/core';
import { TodosContext } from '../../contexts/todos';
import Todo from '../Todo';

const TodoList = () => {
  const todos = useContext(TodosContext);
  const todosLength = todos.length - 1;

  if (!todos.length) return null;

  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Link key={todo.id} to={`/tasks/${todo.id}`}>
            <Todo {...todo} />
            {i < todosLength && <Divider />}
          </Link>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;