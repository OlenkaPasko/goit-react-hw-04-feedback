import { useState } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export default function App() {
 const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  //початковий стан
 // state = {
 //   good: 0,
 //   neutral: 0,
 //   bad: 0,
 // };

const leaveFeedback = event => {
   setGood(prevState => event.prevState + 1);
   setBad(prevState => event.prevState + 1);
   setNeutral(prevState => event.prevState + 1);
 //  this.setState({ [event]: this.state[event] + 1 });
  };
  
  
  
  //загальнf кількість зібраних відгуків
  const countTotalFeedback = () => 
  //  return this.state.bad + this.state.neutral + this.state.good;
    good + neutral + bad;

  //відсоток позитивних відгуків
  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());
  
  //{
  //  let percentage = 0;
  //  if (this.countTotalFeedback() !== 0) {
  //    percentage = Number.parseInt(
  //      (this.state.good / this.countTotalFeedback()) * 100
  //    );
  //  }
  //  return percentage;
  //};

  //рендер всього контенту
 // render() {
   // const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  //}
}
