import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [exercise, setExercise] = useState('');
  const [isEditing, setIsEditing] = useState('');
  const [editValue, setEditValue] = useState('');
  const [editIndex, setEditIndex] = useState('');

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'exercise') {
      setExercise(value);
    }
    if (name === 'editValue') {
      setEditValue(value);
    }
  };

  const handleSubmit = () => {
    if (!exercise) return;
    const itemsCopy = [...items];
    itemsCopy.push(exercise);
    setItems(itemsCopy);
    setExercise('');
  };

  const handleDelete = (i) => {
    const itemsCopy = [...items];
    itemsCopy.splice(i, 1);
    setItems(itemsCopy);
  };

  const startEdit = (item, index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEditValue(item);
  };

  const confirmEdit = (i) => {
    const itemsCopy = [...items];
    itemsCopy[i] = editValue;
    setItems(itemsCopy);
    setIsEditing(false);
    setEditValue('');
  };

  const isEditIndex = (i) => {
    return editIndex === i;
  };

  return (
    <>
      <h1>Workout App</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className='br-025'
          name='exercise'
          placeholder='Exercise'
          value={exercise}
          onChange={handleChange}
        />
        <button id='submit' className='br-025' onClick={handleSubmit}>
          Log Exercise
        </button>
      </form>

      {!!items.length && (
        <ul>
          {items.map((item, i) => (
            <li className='item br-025' key={i}>
              {isEditing && isEditIndex(i) ? (
                <input
                  className='br-025'
                  name='editValue'
                  value={editValue}
                  onChange={handleChange}
                />
              ) : (
                <div>{item}</div>
              )}

              {isEditing && isEditIndex(i) ? (
                <button className='br-025' onClick={() => confirmEdit(i)}>
                  confirm
                </button>
              ) : (
                <button className='br-025' onClick={() => startEdit(item, i)}>
                  edit
                </button>
              )}
              <button className='br-025' onClick={() => handleDelete(i)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
