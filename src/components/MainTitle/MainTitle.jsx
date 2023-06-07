import React from 'react';
import PropTypes from 'prop-types';

export const MainTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

MainTitle.propTypes = {
  title: PropTypes.string.isRequired,
};