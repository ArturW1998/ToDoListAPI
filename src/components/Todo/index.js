import React, { memo, useContext } from 'react';
import propTypes from 'prop-types';
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import ACTION_TYPES from '../../constants/actionTypes';
import { DispatchContext } from '../../contexts/todos';
import useToggle from '../../hooks/useToggle';
import EditTodoForm from '../EditTodoForm';
import styles from './styles';

const Todo = ({ task, completed, id }) => {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  const listItemTextStyles = styles.listItemText(completed);
  const tabIndex = -1;

  const onToggle = () => dispatch({ type: ACTION_TYPES.TOGGLE, id });
  const onRemove = () => dispatch({ type: ACTION_TYPES.REMOVE, id });

  return (
    <ListItem style={styles.listItem}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox tabIndex={tabIndex} checked={completed} onClick={onToggle} />
          <ListItemText style={listItemTextStyles}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={onRemove}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

Todo.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  task: propTypes.string,
  completed: propTypes.bool,
};

Todo.defaultProps = {
  task: 'New task',
  completed: false,
};

export default memo(Todo);
