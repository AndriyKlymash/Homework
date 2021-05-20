//Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути.
// Функція reducer винесена в окремий файл!
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function Counter() {
    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={() => {
                dispatch({type: "INC"})
            }}>Increment+1
            </button>

            <button onClick={() => {
                dispatch({type: "DEC"})
            }}>Decrement-1
            </button>

            <button onClick={() => {
                dispatch({type: "RES"})
            }}>Reset
            </button>

            <button onClick={() => {
                dispatch({type: "INC_100"})
            }}>Inc+100
            </button>

            <button onClick={() => {
                dispatch(({type: "DEC_100"}))
            }}>Dec-100
            </button>

            <input
                type="number"
                value={value}
                onChange={({target: {value}}) => setValue(value)}
            />

            <button onClick={() => {
                dispatch({type: "INC_CUSTOM", payload: Number(value)})
            }}>Inc custom
            </button>


        </div>
    );
}

