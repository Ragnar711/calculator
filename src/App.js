import { useState } from "react";
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };
    const handleClear = () => {
        setInput("");
        setResult("");
    };
    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };
    const handleEquals = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult);
            setInput("");
        } catch (error) {
            setResult("Error");
        }
    };
    return (
        <div className="App">
            <div className="res">
                <h1>Calculator</h1>
                <input readOnly value={result} />
                <input readOnly value={input} />
            </div>
            <hr />
            <div className="op">
                <div className="col">
                    <button onClick={handleClear}>AC</button>
                    <button onClick={() => handleButtonClick("7")}>7</button>
                    <button onClick={() => handleButtonClick("4")}>4</button>
                    <button onClick={() => handleButtonClick("1")}>1</button>
                    <button onClick={() => handleButtonClick("*")}>x</button>
                </div>
                <div className="col">
                    <button onClick={handleDelete}>Del</button>
                    <button onClick={() => handleButtonClick("8")}>8</button>
                    <button onClick={() => handleButtonClick("5")}>5</button>
                    <button onClick={() => handleButtonClick("2")}>2</button>
                    <button onClick={() => handleButtonClick("0")}>0</button>
                </div>
                <div className="col">
                    <button onClick={() => handleButtonClick("%")}>%</button>
                    <button onClick={() => handleButtonClick("9")}>9</button>
                    <button onClick={() => handleButtonClick("6")}>6</button>
                    <button onClick={() => handleButtonClick("3")}>3</button>
                    <button onClick={() => handleButtonClick(".")}>.</button>
                </div>
                <div className="col">
                    <button
                        className="operator"
                        onClick={() => handleButtonClick("/")}
                    >
                        /
                    </button>
                    <button
                        className="operator"
                        onClick={() => handleButtonClick("*")}
                    >
                        *
                    </button>
                    <button
                        className="operator"
                        onClick={() => handleButtonClick("-")}
                    >
                        -
                    </button>
                    <button
                        className="operator"
                        onClick={() => handleButtonClick("+")}
                    >
                        +
                    </button>
                    <button className="result" onClick={handleEquals}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
