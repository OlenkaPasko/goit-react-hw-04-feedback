import React from 'react';
import PropTypes from 'prop-types';

export const BtnFeedback = ({
  type = 'button',
  children,
  onClick,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

BtnFeedback.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};