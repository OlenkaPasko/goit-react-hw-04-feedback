import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <ul className={css.statList}>
      <li>
        <p className={css.discrStatistic}>
          Good:
          <span className="result">{good}</span>
        </p>
      </li>
      <li>
        <p className={css.discrStatistic}>
          Neutral:
          <span className="result">{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.discrStatistic}>
          Bad:
          <span className="result">{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.discrStatistic}>
          Total:
          <span className="result">{total}</span>
        </p>
      </li>
      <li>
        <p className={css.discrStatistic}>
          Positive feedbeack:
          <span className="result">{positivePercentage}%</span>
        </p>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
