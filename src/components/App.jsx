import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import { useEffect, useState } from 'react';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const parsedFeedBack = JSON.parse(localStorage.getItem('feedback'));
    return (
      parsedFeedBack || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedBack = feedbackType => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  const total = totalFeedback();

  const [positiveFeedbacks, setpositiveFeedbacks] = useState(0);

  useEffect(() => {
    setpositiveFeedbacks(Math.round(((feedback.good + feedback.neutral) / total) * 100));
  }, [feedback.good, feedback.neutral, total]);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedBack={updateFeedBack} total={total} resetFeedback={resetFeedback} />
      {total > 0 ? (
        <Feedback {...feedback} total={total} positiveFeedbacks={positiveFeedbacks} />
      ) : (
        <Notification messege={'No feedback'} />
      )}
    </>
  );
}
