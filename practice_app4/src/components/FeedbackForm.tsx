import { useState } from "react";
 
type Props = {
  onSubmit: (name: string, message: string, rating: number) => void;
};
 
export default function FeedbackForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !message || rating === 0) return;
    onSubmit(name, message, rating);
    // Reset form
    setName("");
    setMessage("");
    setRating(0);
  }
 
  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <h2>Leave Feedback</h2>
 
      <label>
        Your Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Rohan"
        />
      </label>
 
      <label>
        Your Feedback
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you think..."
          rows={3}
        />
      </label>
 
      <label>Rating</label>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (hovered || rating) ? "active" : ""}`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            ★
          </span>
        ))}
      </div>
 
      <button type="submit">Submit Feedback</button>
    </form>
  );
}