import axios from "axios";
import { type FormEvent, useEffect, useState } from "react";

type FeedbackItem = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type CreateFeedbackInput = {
  postId: number;
  name: string;
  email: string;
  body: string;
};

type UpdateFeedbackInput = {
  body: string;
};

const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
const feedbackUrl = `${commentsUrl}?postId=1`;

function Feedback() {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [updatedBody, setUpdatedBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadFeedback() {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get<FeedbackItem[]>(feedbackUrl);

        if (!ignore) {
          setFeedbackItems(response.data);
        }
      } catch {
        if (!ignore) {
          setError("Could not load feedback.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadFeedback();

    return () => {
      ignore = true;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newFeedback: CreateFeedbackInput = {
      postId: 1,
      name,
      email,
      body,
    };

    const response = await axios.post<FeedbackItem>(commentsUrl, newFeedback);
    const createdFeedback = response.data;
    const nextFeedbackItems = [...feedbackItems, createdFeedback];

    setFeedbackItems(nextFeedbackItems);
    setName("");
    setEmail("");
    setBody("");
  }

  function beginEdit(item: FeedbackItem) {
    setEditingId(item.id);
    setUpdatedBody(item.body);
  }

  async function handleSave(feedbackId: number) {
    const update: UpdateFeedbackInput = {
      body: updatedBody,
    };

    const response = await axios.patch<FeedbackItem>(
      `${commentsUrl}/${feedbackId}`,
      update,
    );

    const updatedFeedback = response.data;
    const nextFeedbackItems = feedbackItems.map((item) => {
      if (item.id === updatedFeedback.id) {
        return updatedFeedback;
      }

      return item;
    });

    setFeedbackItems(nextFeedbackItems);
    setEditingId(null);
    setUpdatedBody("");
  }

  async function handleRemove(feedbackId: number) {
    await axios.delete(`${commentsUrl}/${feedbackId}`);

    const nextFeedbackItems = feedbackItems.filter(
      (item) => item.id !== feedbackId,
    );

    setFeedbackItems(nextFeedbackItems);

    if (editingId === feedbackId) {
      setEditingId(null);
      setUpdatedBody("");
    }
  }

  return (
    <section className="page-card">
      <p className="eyebrow">Conference Hub</p>
      <h2>Feedback</h2>
      <p className="muted">Read existing feedback and practise HTTP write requests.</p>

      <p className="api-note">
        Demo API: JSONPlaceholder calls these records <strong>comments</strong>.
        Conference Hub presents them as <strong>feedback</strong>. POST, PATCH,
        and DELETE are simulated by JSONPlaceholder and are not persisted after a fresh GET.
      </p>

      <form className="form-card" onSubmit={handleSubmit}>
        <h3>Share feedback</h3>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="feedback-name">Name</label>
            <input
              id="feedback-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="feedback-email">Email</label>
            <input
              id="feedback-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-field full">
            <label htmlFor="feedback-body">Feedback</label>
            <textarea
              id="feedback-body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="action-row">
          <button type="submit">Submit feedback</button>
        </div>
      </form>

      {loading && <p>Loading feedback...</p>}
      {error && <p className="error-message">{error}</p>}

      <ul className="card-list">
        {feedbackItems.map((item) => (
          <li className="content-card" key={item.id}>
            <div className="feedback-header">
              <div>
                <h3>{item.name}</h3>
                <p className="item-meta">{item.email}</p>
              </div>
              <span className="item-id">#{item.id}</span>
            </div>
            <p className="feedback-body">{item.body}</p>
            <div className="action-row">
              <button className="secondary" onClick={() => beginEdit(item)} type="button">
                Edit
              </button>
              <button className="danger" onClick={() => handleRemove(item.id)} type="button">
                Remove
              </button>
            </div>

            {editingId === item.id && (
              <div className="edit-panel">
                <label htmlFor={`edit-${item.id}`}>Updated feedback</label>
                <textarea
                  id={`edit-${item.id}`}
                  value={updatedBody}
                  onChange={(event) => setUpdatedBody(event.target.value)}
                />
                <div className="action-row">
                  <button onClick={() => handleSave(item.id)} type="button">
                    Save
                  </button>
                  <button className="secondary" onClick={() => setEditingId(null)} type="button">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Feedback;
