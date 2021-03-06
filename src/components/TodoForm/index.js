import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField, InputLabel } from '@material-ui/core';
import BREAKPOINTS from '../../constants/breakpoints';
import helpers from '../../utils/helpers';
import api from '../../services/api';
import useInputState from '../../hooks/useInputState';
import useDialog from '../../hooks/useDialog';
import useBreakpoint from '../../hooks/useBreakpoint';
import { DispatchContext, TasksContext } from '../../contexts/tasks';
import { addTask, editTask } from '../../actions/actionCreator';
import TodoDialog from '../TodoDialog';
import useStyles from './styles';

const TodoForm = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useContext(DispatchContext);
  const tasks = useContext(TasksContext);
  const [open, handleOpen, handleClose] = useDialog(false);
  const fullScreen = useBreakpoint(BREAKPOINTS.SMALL);
  const task = helpers.getDataById(tasks, id);
  const [value, handleChange, reset] = useInputState(task.text);
  const classes = useStyles();

  const taskLabel = task.id ? 'Edit the todo' : 'Add a new todo';

  const onSubmit = async e => {
    e.preventDefault();

    const taskAction = task.id ? editTask : addTask;
    const apiMethod = api[taskAction.name];

    try {
      const response = await apiMethod(task.id, value);
      const { id, text } = response;

      dispatch(taskAction(id, text));
      reset();
      history.push(`/tasks/${id}`);
    } catch {
      handleOpen();
    }
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form onSubmit={onSubmit}>
          <InputLabel htmlFor="text" shrink>
            {taskLabel}
          </InputLabel>
          <TextField
            value={value}
            onChange={handleChange}
            id="text"
            margin="normal"
            fullWidth
            autoFocus
          />
        </form>
      </Paper>
      <TodoDialog
        open={open}
        handleClose={handleClose}
        fullScreen={fullScreen}
        title="Something went wrong..."
      >
        Error, please try again later.
      </TodoDialog>
    </>
  );
};

export default TodoForm;
