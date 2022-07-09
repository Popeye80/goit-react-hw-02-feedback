import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box display="flex" mt="4" as="ul">
      {options.map(option => {
        return (
          <li onClick={() => onLeaveFeedback(option)} key={option}>
            <Button>{option}</Button>
          </li>
        );
      })}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


