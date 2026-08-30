import axios from "axios";
import { useEffect, useState } from "react";

type CommentResponse = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const feedbackUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

function FeedbackInbox() {
  const [feedbackItems, setFeedbackItems] = useState<CommentResponse[]>([]);
  // state that will indicate the HTTP Request is in progress
  const [isLoading, setIsLoading] = useState(true);
  // state that will indicate the HTTP Response was a failure
  const [errorMessage, setErrorMessage] = useState("");
  
  // we need to fetch from an external service (jsonplaceholder)
  useEffect(() => {
    async function loadFeedback() {
      // try/catch
      
      try {
        // an Exception may be thrown here  
        const response = await axios.get(feedbackUrl);
        console.log(response);
        
        // Only to test the error flow
        // setErrorMessage("Could not load feedback");
        
        setFeedbackItems(response.data);
      } catch(error) {
        setErrorMessage("Could not load feedback");
      }
      
      setIsLoading(false);
    }
    loadFeedback();
  }, []);

  if(isLoading) {
    return (
      <section className="panel">
        <p>Loading feedback...</p>
      </section>

    )
  }

  if(errorMessage) {
    return (
      <section className="panel">
        <p>Error fetching data: {errorMessage}</p>
      </section>
    )
  }

  if(feedbackItems.length === 0) {
    return (
      <section className="panel">
        <p>No feedback yet.</p>
      </section>
    )
  }

  return (
    <section className="panel">
      <h2>Feedback inbox</h2>
      <p className="message">Feedback has not been loaded yet.</p>
      <ul>
        {
          feedbackItems.map((feedback) => (
            <li key={feedback.id}>
              <h3>{feedback.name}</h3>
              <p>{feedback.email}</p>
              <p>{feedback.body}</p>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default FeedbackInbox;
