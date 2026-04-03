import { Feedback } from "../actions/feedback";
 
type Props = {
  feedbackList: Feedback[];
};
 
export default function FeedbackList({ feedbackList }: Props) {
  if (feedbackList.length === 0) {
    return <p className="empty">No feedback yet. Be the first!</p>;
  }
 
  return (
    <div className="feedback-list">
      <h2>All Feedback</h2>
      <ul>
        {feedbackList.map((item) => (
          <li key={item.id} className={item.id < 0 ? "optimistic" : ""}>
            <div className="feedback-header">
              <strong>{item.name}</strong>
              <span className="rating">
                {"★".repeat(item.rating)}{"☆".repeat(5 - item.rating)}
              </span>
            </div>
            <p>{item.message}</p>
            {item.id < 0 && <span className="sending-tag">Sending...</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}