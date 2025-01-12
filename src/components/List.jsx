import "./List.css";
import TodoItem from "./TodoItem";

const List = () => {

    return (
    <div className="List">
        <h4>Todo List 🍒 </h4>
        <input placeholder="search" />
        <div className="todos_wrapper">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    </div>
    );
};

export default List;