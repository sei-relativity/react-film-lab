import React from 'react';

const Fave = props => {

  const handleClick = (e) => {
    e.stopPropagation()
    console.log('Handling Fave click!')

    props.onFaveToggle()

  }
  return (
    <div className={`film-row-fave ${(props.isFave) ? 'remove_from_queue' : 'add_to_queue'}`} onClick={handleClick}>
      <p className="material-icons">{(props.isFave) ? 'remove_from_queue' : 'add_to_queue'}</p>
    </div>
  );
}

export default Fave;
