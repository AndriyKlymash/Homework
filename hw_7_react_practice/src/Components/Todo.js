export default function Todo({todo: {todoItem, id}, idX, deleteTodo}) {
    console.log(todoItem.id);
    return(
        <h4>
            {idX}. {todoItem} <button onClick={() => deleteTodo(id)}>Delete</button>
        </h4>
    );
}