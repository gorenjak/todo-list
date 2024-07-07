import React, { useState } from 'react';
import { TextInput, Button } from 'carbon-components-react';
import { Add } from '@carbon/icons-react';

const TodoInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='input-style'>
      <TextInput
        id="todo-input"
        labelText=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Vnesite opravilo"
      />
      <Button
        renderIcon={Add}
        onClick={handleAdd}
        className="custom-add-button"
        iconDescription="Dodaj opravilo"
        kind="primary"
        size="field"
      >
        Dodaj
      </Button>
    </div>
  );
};

export default TodoInput;