import React from 'react'

const NotUsed = () => {

    //create func square
    // pass prop
    const Square = ({ value, onSquareClick }) => {

        // making disapear
        const [visible, setVisible] = useState(true);
        // doing x
        const [value, setValue] = useState(null);

        const handleRightClick = (event) => {
            event.preventDefault();
            setVisible(false);
        };
        return visible ? (
            <button
                className="square"
                onClick={onSquareClick}
                onContextMenu={handleRightClick} // Usa onContextMenu para clique direito

            >   {value}
            </button >
        ) : null
    };

    const App = () => {

        const [squares, setSquares] = useState(Array(9).fill(null));

        const handleClick = (i) => {

            const nextSquares = squares.slice();

            nextSquares[i] = "X";

            setSquares(nextSquares);


            console.log(`Clicked on line ${value}`)
        };

        return (
            <>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} />
                    <Square value={squares[2]} />
                </div >
                <div className="board-row">
                    <Square value={squares[3]} />
                    <Square value={squares[4]} />
                    <Square value={squares[5]} />
                </div >
                <div className="board-row">
                    <Square value={squares[6]} />
                    <Square value={squares[7]} />
                    <Square value={squares[8]} />
                </div >
            </>
        );
    };
}

export default NotUsed