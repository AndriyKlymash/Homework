import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./Todo";

export default function Inputs() {
    const [value, setValue] = useState('');
    const todo = useSelector(state => state);
    console.log(todo);
    const dispatch = useDispatch();


    const addTodo = () => {
        dispatch({type: 'ADD', payload: value, id: Math.random()})
        setValue('')
    }

    const deleteTodo = (id) => {
        dispatch({type: 'DELETE', id: id})
    }

    return (
        <div>
            <input
                type='text'
                value={value}
                onChange={({target: {value}}) => setValue(value)}
            />
            <button onClick={addTodo}>Add</button>

            <div>
                {todo.map((value, index) => <Todo
                    key={index}
                    todo={value}
                    idX={index + 1}
                    deleteTodo={deleteTodo}/>)}
            </div>
        </div>
    );
}