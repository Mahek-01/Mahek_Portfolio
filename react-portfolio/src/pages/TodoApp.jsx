import { useState, useEffect } from 'react';
import './TodoApp.css';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim().length < 4) {
            alert('You cannot assign that small Todo');
            return;
        }

        const newTodo = {
            id: 'todo-' + Date.now(),
            title: inputValue,
            isCompleted: false,
        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        if (window.confirm('Are you sure? You want to delete?')) {
            setTodos(todos.filter((todo) => todo.id !== id));
        }
    };

    const clearCompleted = () => {
        if (window.confirm('Are you sure you want to delete completed todos?')) {
            setTodos(todos.filter((todo) => !todo.isCompleted));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.isCompleted;
        if (filter === 'completed') return todo.isCompleted;
        return true;
    });

    const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;

    return (
        <div id="Container" className="container">
            <div className="todo_app glass">
                <header className="todo_header">
                    <h1>MP Todo List</h1>
                    <p className="subtitle">Stay organized and productive</p>
                </header>

                <div className="todo_input_container">
                    <input
                        type="text"
                        className="todo_input"
                        placeholder="Add a new task ..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="add_btn" onClick={addTodo}>Add</button>
                </div>

                <div className="filter-container">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>
                    <button
                        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <li key={todo.id} className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
                            <input
                                type="checkbox"
                                className="todo-checkbox"
                                checked={todo.isCompleted}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span className="todo-text">{todo.title}</span>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>x</button>
                        </li>
                    ))}
                </ul>

                <div className="todo-footer">
                    <span className="item-left">{itemsLeft} items left</span>
                    <button className="clear-completed" onClick={clearCompleted}>
                        Clear Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
