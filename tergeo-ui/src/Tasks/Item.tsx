import React, { Fragment } from 'react';

const Item = ({
  description,
  completed,
}: {
  description: string;
  completed: boolean;
}) => {
  return (
    <Fragment>
      <div>{description}</div>
      <div>Completed: {completed.toString()}</div>
    </Fragment>
  );
};

export default Item;
