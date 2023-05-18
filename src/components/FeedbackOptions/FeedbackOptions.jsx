import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ countBtn }) => {
  return (
    <div>
      <div className={css.btnConteiner}>
        <button name="good" onClick={countBtn} className={css.btn}>
          Good
        </button>

        <button name="neutral" onClick={countBtn} className={css.btn}>
          Neutral
        </button>
        <button name="bad" onClick={countBtn} className={css.btn}>
          Bad
        </button>
        <button name="reset" onClick={countBtn} className={css.btn}>
          Reset
        </button>
      </div>
    </div>
  );
};
