import React from 'react'

//create func square
// pass prop
const Square = ({value}) => {
  return (
    <button className="square">{value}
    </button>
  )
}

const App = () => {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div >
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div >
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div >
    </>
  )
}

export default App