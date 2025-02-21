import React, { useState } from 'react';

//create func square
// pass prop
const Square = () => {

  const handleClick = () => {
    console.log(`Clicked on line ${value}`)
  };

  // making disapear
  const [visible, setVisible] = useState(true);
  // doing x


  const handleRightClick = (event, _value) => {
    event.preventDefault();
    setVisible(false);
  };
  return visible ? (
    <button
      className="square"
      onClick={handleClick}
      onContextMenu={handleRightClick} // Usa onContextMenu para clique direito

    >   {value}
    </button >
  ) : null
};

const App = () => {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div >
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div >
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div >
    </>
  )
}

export default App