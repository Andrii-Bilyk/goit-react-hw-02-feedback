import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/feedback-options.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles['feedback-options']}>
      <button className={styles['feedback-button']} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={styles['feedback-button']} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles['feedback-button']} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
