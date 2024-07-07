import React from 'react';
import { Checkbox, Button } from 'carbon-components-react';
import { TrashCan } from '@carbon/icons-react';

const TodoList = ({ todos, onToggle, onDelete }) => {

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <Checkbox 
            id={`checkbox-${todo.id}`} 
            checked={todo.completed}
            labelText=""
            onChange={() => onToggle(todo.id)}
          />
          <span className={`todo-text ${todo.completed ? 'checkbox-label' : ''}`}>
            {todo.text}
          </span>
          <Button         
            renderIcon={() => <TrashCan id="trash-icon"/>}
            onClick={() => onDelete(todo.id)}
            className="custom-delete-button"
            kind="primary"
            size="field"
          />
        </div>
      ))}
    </div>
  );
};

export default TodoList;