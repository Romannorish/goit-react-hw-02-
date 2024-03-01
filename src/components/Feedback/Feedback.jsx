import { PropTypes } from 'prop-types';
import css from './Feedback.module.css';
import { CiFaceSmile } from 'react-icons/ci';
import { PiSmileyMeh } from 'react-icons/pi';
import { PiSmileySadThin } from 'react-icons/pi';
import { MdOutlineDoNotDisturbOnTotalSilence } from 'react-icons/md';
import { FcPositiveDynamic } from 'react-icons/fc';

export default function Feedback({ good, neutral, bad, total, positiveFeedbacks }) {
  return (
    <div className={css.contItem}>
      <ul className={css.feedList}>
        <li className={css.feedItem}>
          <CiFaceSmile className={css.icon} /> good: {good}
        </li>
        <li className={css.feedItem}>
          <PiSmileyMeh className={css.icon} /> neutral: {neutral}
        </li>
        <li className={css.feedItem}>
          <PiSmileySadThin className={css.icon} /> bad: {bad}
        </li>
        <li className={css.feedItem}>
          <MdOutlineDoNotDisturbOnTotalSilence className={css.icon} /> total: {total}
        </li>
        <li className={css.feedItem}>
          <FcPositiveDynamic className={css.icon} />
          positivFeedBack:
          {positiveFeedbacks}%
        </li>
      </ul>
    </div>
  );
}

Feedback.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivFeedBack: PropTypes.number.isRequired,
};
