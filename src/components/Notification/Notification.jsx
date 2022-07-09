import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

export const Notification = ({ text }) => {
  return <Text>{text}</Text>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
