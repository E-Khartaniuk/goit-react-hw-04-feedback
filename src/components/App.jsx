import React, { Component } from 'react';
import { Feedback } from '../components/feedback/Feedback';
import css from './MaineStyle/MaineStyle.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countBtn = event => {
    this.setState(setState => {
      const optionName = event.target.name;
      console.log(optionName);
      return { [optionName]: (setState[optionName] += 1) };
    });
  };

  countTotalFeedback = () => {
    let totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    let positiveFeedbackPercentage =
      total > 0 ? Math.round((good / total) * 100) : 0;
    return positiveFeedbackPercentage;
  };

  render() {
    let positivePercentage = this.countPositiveFeedbackPercentage();
    let total = this.countTotalFeedback();

    return (
      <div className={css.appContainer}>
        <Feedback
          options={this.state}
          onLeaveFeedback={{
            countBtn: this.countBtn,
            positivePercentage,
            total,
          }}
        ></Feedback>
      </div>
    );
  }
}
