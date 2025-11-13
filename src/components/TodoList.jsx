export default function TodoList({ todos, deleteTodo, toggleTodo, setTodoToEdit }) {
  return (
    <ul className="todo-list">
      {todos
        .slice()
        .sort((a, b) => a.completed - b.completed) // incomplete first
        .map((todo) =>(
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="todo-main" onClick={() => toggleTodo(todo.id)}>
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.title}
          </span>
          {todo.description && <p className="todo-desc">{todo.description}</p>}
          <div className="todo-meta">
            {todo.dueDate && <span className="due-date">📅 {todo.dueDate}</span>}
          </div>
        </div>

        <span className={`priority ${todo.priority.toLowerCase()}`}>{todo.priority}</span>
        <button className="edit-btn" onClick={() => setTodoToEdit(todo)}>✍🏽</button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>🗑️</button>
      </li>

      ))}
    </ul>
  );
}
