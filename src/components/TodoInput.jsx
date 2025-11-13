import {React, useState} from 'react';

function TodoInput({addTodo}) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return; // must have title
    addTodo(task);
    setTask({ title: "", description: "", priority: "Low", dueDate: "" }); // reset form
  };

  return (
       <form className="todo-input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={task.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description (optional)"
        value={task.description}
        onChange={handleChange}
        rows="2"
      />

      <div className="input-row">
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoInput;
