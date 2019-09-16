import React, { FunctionComponent } from 'react';

export const NewTaskModal: FunctionComponent = () => {
  return (
    <div>
      <h1>Add a new Task</h1>
      <form>
        <input placeholder="Task name" />
        <select placeholder="Select a Group">
          <option>Hufflepuff</option>
          <option>Gryffindor</option>
          <option>Ravenclaw</option>
          <option>Slytherin</option>
        </select>
      </form>
    </div>
  );
};
