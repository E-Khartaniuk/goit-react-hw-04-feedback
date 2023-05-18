import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from './feedback.module.css';

export class Feedback extends Component {
  render() {
    const { total, positivePercentage, countBtn } = this.props.onLeaveFeedback;
    return (
      <div className={css.container}>
        <Section
          title="Please leave feedback"
          children={(FeedbackOptions, Statistics)}
        >
          <FeedbackOptions countBtn={countBtn} />
          {total ? (
            <Statistics
              good={this.props.options.good}
              neutral={this.props.options.neutral}
              bad={this.props.options.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
