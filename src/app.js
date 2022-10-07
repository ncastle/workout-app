import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [exercise, setExercise] = useState('');

  const handleChange = (evt) => {
    const { value } = evt.target;
    setExercise(value);
  };

  const handleSubmit = () => {
    if (!exercise) return;
    const itemsCopy = [...items];
    itemsCopy.push(exercise);
    setItems(itemsCopy);
    setExercise('');
  };

  const handleDelete = (i) => {
    console.log('im deleting index ', i);
    const itemsCopy = [...items];
    itemsCopy.splice(i, 1);
    setItems(itemsCopy);
  };

  console.log(exercise);

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
              {item}
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
