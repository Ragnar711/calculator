import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="res">
                <h1>Calculator</h1>
                <input readOnly></input>
                <input readOnly></input>
            </div>
            <hr />
            <div className="op">
                <div className="col">
                    <button>AC</button>
                    <button>7</button>
                    <button>4</button>
                    <button>1</button>
                    <button>x</button>
                </div>
                <div className="col">
                    <button>Del</button>
                    <button>8</button>
                    <button>5</button>
                    <button>2</button>
                    <button>0</button>
                </div>
                <div className="col">
                    <button>%</button>
                    <button>9</button>
                    <button>6</button>
                    <button>3</button>
                    <button>.</button>
                </div>
                <div className="col">
                    <button className="operator">/</button>
                    <button className="operator">*</button>
                    <button className="operator">-</button>
                    <button className="operator">+</button>
                    <button className="result">=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
