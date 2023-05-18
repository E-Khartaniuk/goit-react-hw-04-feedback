import React, { useState } from 'react';
import { Feedback } from '../components/feedback/Feedback';
import css from './MaineStyle/MaineStyle.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countBtn(event) {
    const optionName = event.target.name;
    if (optionName === 'good') {
      setGood(good + 1);
    } else if (optionName === 'neutral') {
      setNeutral(neutral + 1);
    } else if (optionName === 'bad') {
      setBad(bad + 1);
    } else if (optionName === 'reset') {
      setGood(0);
      setNeutral(0);
      setBad(0);
    }
  }

  const countTotalFeedback = () => {
    let totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    let positiveFeedbackPercentage =
      total > 0 ? Math.round((good / total) * 100) : 0;
    return positiveFeedbackPercentage;
  };

  let positivePercentage = countPositiveFeedbackPercentage();
  let total = countTotalFeedback();

  return (
    <div className={css.appContainer}>
      <Feedback
        options={{ good, bad, neutral }}
        onLeaveFeedback={{
          countBtn: countBtn,
          positivePercentage,
          total,
        }}
      ></Feedback>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countBtn = event => {
//     this.setState(setState => {
//       const optionName = event.target.name;
//       console.log(optionName);
//       return { [optionName]: (setState[optionName] += 1) };
//     });
//   };

//   countTotalFeedback = () => {
//     let totalFeedback = this.state.good + this.state.neutral + this.state.bad;
//     return totalFeedback;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     let positiveFeedbackPercentage =
//       total > 0 ? Math.round((good / total) * 100) : 0;
//     return positiveFeedbackPercentage;
//   };

//   render() {
//     let positivePercentage = this.countPositiveFeedbackPercentage();
//     let total = this.countTotalFeedback();

//     return (
//       <div className={css.appContainer}>
//         <Feedback
//           options={this.state}
//           onLeaveFeedback={{
//             countBtn: this.countBtn,
//             positivePercentage,
//             total,
//           }}
//         ></Feedback>
//       </div>
//     );
//   }
// }
