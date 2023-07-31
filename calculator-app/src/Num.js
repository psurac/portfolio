import "./Num.css";

function Num(prop) {
    const inputRef = prop.inputRef;
    function inputAdd(change, e) {
        e.preventDefault();
        inputRef.current.value = inputRef.current.value.toString() + change.toString();
    }
    function inputRemove(e) {
        e.preventDefault();
        let len = inputRef.current.value.length;
        if (len > 0) {
            inputRef.current.value = inputRef.current.value.substring(0, len - 1);
        }
    }
    function heart(e) {
        e.preventDefault();
        if (window.confirm('World is made out of Love.')) {
            alert('Have a nice day coder colleague ;-)');
        }
    }

    return(
        <div className="grid-container">
            <button onClick={(e) => inputAdd(1, e)}>1</button>
            <button onClick={(e) => inputAdd(2, e)}>2</button>
            <button onClick={(e) => inputAdd(3, e)}>3</button>
            <button onClick={(e) => inputAdd(4, e)}>4</button>
            <button onClick={(e) => inputAdd(5, e)}>5</button>
            <button onClick={(e) => inputAdd(6, e)}>6</button>
            <button onClick={(e) => inputAdd(7, e)}>7</button>
            <button onClick={(e) => inputAdd(8, e)}>8</button>
            <button onClick={(e) => inputAdd(9, e)}>9</button>
            <button onClick={inputRemove}>&#60;x</button>
            <button onClick={(e) => inputAdd(0, e)}>0</button>
            <button onClick={heart}>&hearts;</button>
        </div>
    );
}

export default Num;