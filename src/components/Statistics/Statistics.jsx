import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statisticConteiner}>
      <h4 className={css.title}>Statistic</h4>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total Feedback: {total}</p>
      <p className={css.item}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
