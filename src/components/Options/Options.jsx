import { PropTypes } from "prop-types";
import css from "./Options.module.css";

export default function Options({ updateFeedBack, total, resetFeedback }) {
  return (
    <div className={css.containerButton}>
      <button
        onClick={() => {
          updateFeedBack("good");
        }}
        className={css.optionBtn}
      >
        good
      </button>
      <button
        onClick={() => {
          updateFeedBack("neutral");
        }}
        className={css.optionBtn}
      >
        neutral
      </button>
      <button
        onClick={() => {
          updateFeedBack("bad");
        }}
        className={css.optionBtn}
      >
        bad
      </button>
      {total ? (
        <button onClick={resetFeedback} className={css.optionBtn}>
          reset
        </button>
      ) : null}
    </div>
  );
}

Options.PropTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};
