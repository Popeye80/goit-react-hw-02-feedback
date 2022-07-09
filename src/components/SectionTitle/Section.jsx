import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Box mx="auto" mt="5" width="container" as="section">
      {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
