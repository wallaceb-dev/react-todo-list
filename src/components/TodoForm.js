import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });

    setInput('');
  };

  return (
    <div>
      {props.edit ? (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            autoComplete="off"
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </form>
      ) : (
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            autoComplete="off"
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </form>
      )}
    </div>
  );
}

export default TodoForm;
