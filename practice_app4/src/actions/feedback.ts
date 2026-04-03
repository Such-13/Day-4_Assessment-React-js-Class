export type Feedback = {
  id: number;
  name: string;
  message: string;
  rating: number;
};
 
// Simulated server action
export function submitFeedback(
  feedbackList: Feedback[],
  newEntry: Omit<Feedback, "id">
): Feedback[] {
  const newFeedback: Feedback = {
    id: Date.now(),
    ...newEntry,
  };
  return [newFeedback, ...feedbackList];
}