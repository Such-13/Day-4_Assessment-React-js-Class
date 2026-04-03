import { useState } from "react";
import { Feedback, submitFeedback } from "./actions/feedback";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css" with { type: "css" };
 import "./App.css";
export default function App() {
  const [feedbackList, setFeedbackList] = useState<Feedback[]>([]);
 
  function handleNewFeedback(name: string, message: string, rating: number) {
    // --- OPTIMISTIC STATE ---
    // Immediately show entry with a temp negative id (before "server" confirms)
    const optimisticEntry: Feedback = {
      id: -Date.now(), // negative = optimistic placeholder
      name,
      message,
      rating,
    };
    setFeedbackList((prev) => [optimisticEntry, ...prev]);
 
    // Simulate server delay (like a real async action)
    setTimeout(() => {
      // Replace optimistic entry with real one from "server action"
      setFeedbackList((prev) => {
        const withoutOptimistic = prev.filter((f) => f.id !== optimisticEntry.id);
        return submitFeedback(withoutOptimistic, { name, message, rating });
      });
    }, 1000);
  }
 
  return (
    <div className="app">
      <header>
        <h1> Feedback Board</h1>
        <p>Share your thoughts with us</p>
      </header>
      <main>
        <FeedbackForm onSubmit={handleNewFeedback} />
        <FeedbackList feedbackList={feedbackList} />
      </main>
    </div>
  );
}
 