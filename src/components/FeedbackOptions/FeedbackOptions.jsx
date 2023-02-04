import PropTypes from 'prop-types';
import { BtnContainer, BtnFeedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <BtnFeedback
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </BtnFeedback>
        );
      })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
