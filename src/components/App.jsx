import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './SectionTitle/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce(
      (total, values) => total + values,
      0
    );
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (100 / this.countTotalFeedback()) * this.state.good;
    return Number.parseInt(positiveFeedback);
  };

  buttonsName = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.buttonsName}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification text="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}
