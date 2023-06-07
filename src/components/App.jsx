import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';


export class App extends Component {
  //початковий стан
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    this.setState({ [event]: this.state[event] + 1 });
  };

  //загальнf кількість зібраних відгуків
  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  //відсоток позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    if (this.countTotalFeedback() !== 0) {
      percentage = Number.parseInt(
        (this.state.good / this.countTotalFeedback()) * 100
      );
    }
    return percentage;
  };

  //рендер всього контенту
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
