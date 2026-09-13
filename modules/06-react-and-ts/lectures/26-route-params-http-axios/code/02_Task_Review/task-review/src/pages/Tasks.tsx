import axios from "axios";
import { useEffect, useState } from "react";

type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const todosUrl = "https://jsonplaceholder.typicode.com/todos";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadTasks() {
      try {
        const response = await axios.get<Task[]>(`${todosUrl}?_limit=6`);
        if (!ignore) {
          setTasks(response.data);
        }
      } catch {
        if (!ignore) {
          setError("Could not load tasks.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadTasks();

    return () => {
      ignore = true;
    };
  }, []);

  const visibleTasks = tasks;

  function handleStatusChange(nextStatus: string) {
    void nextStatus;

    /*
     * TODO - Activity Part 1 / Slides 39-40
     * Make the selected task status part of the browser address.
     * The visible list should follow the current address.
     */
  }

  async function handleComplete(taskId: number) {
    void taskId;

    /*
     * TODO - Activity Part 2 / Slide 41
     * Mark the selected task complete through the API,
     * then use the returned task in the current list.
     */
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Lecture 26 activity</p>
      <h2>Task Review</h2>
      <p className="muted">
        Filter the task list using the URL, then complete a task with an HTTP request.
      </p>

      <div className="filter-bar" aria-label="Task status filter">
        <button className="filter-button active" onClick={() => handleStatusChange("all")} type="button">
          All
        </button>
        <button className="filter-button" onClick={() => handleStatusChange("open")} type="button">
          Open
        </button>
        <button className="filter-button" onClick={() => handleStatusChange("completed")} type="button">
          Completed
        </button>
      </div>

      {loading && <p>Loading tasks...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="card-list">
        {visibleTasks.map((task) => (
          <li className="content-card" key={task.id}>
            <div className="task-header">
              <div>
                <h3>{task.title}</h3>
                <p className={task.completed ? "status-completed" : "status-open"}>
                  Status: {task.completed ? "Completed" : "Open"}
                </p>
              </div>
              <span className="item-id">#{task.id}</span>
            </div>
            {!task.completed && (
              <button onClick={() => handleComplete(task.id)} type="button">
                Mark complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Tasks;
