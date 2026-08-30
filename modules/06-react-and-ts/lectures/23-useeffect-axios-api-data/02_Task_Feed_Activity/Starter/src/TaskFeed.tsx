import axios from "axios";
import { useEffect, useState } from "react";

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const tasksUrl =
  "https://jsonplaceholder.typicode.com/users/1/todos";

function TaskFeed() {
  const [tasks, setTasks] =
    useState<Task[]>([]);
  const [isLoading, setIsLoading] =
    useState(true);
  const [errorMessage, setErrorMessage] =
    useState("");

  useEffect(() => {
    async function loadTasks() {
      try {
        // TODO: Make the typed Axios GET request.

        // TODO: Store the returned task data.
      } catch {
        // TODO: Store "Could not load tasks."
      }

      // TODO: Record that loading has finished.
    }

    // TODO: Start loadTasks.
  }, []);

  if (isLoading) {
    return (
      <section className="panel">
        <p className="message">Loading tasks...</p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="panel">
        <p className="message">{errorMessage}</p>
      </section>
    );
  }

  if (tasks.length === 0) {
    return (
      <section className="panel">
        <p className="message">No tasks yet.</p>
      </section>
    );
  }

  return (
    <section className="panel">
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            className="task-item"
            key={task.id}
          >
            <h3>{task.title}</h3>
            <p className="muted">
              Status:{" "}
              {task.completed
                ? "Complete"
                : "Open"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskFeed;
