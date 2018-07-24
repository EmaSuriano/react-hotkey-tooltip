import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'docz';

const NextSection = ({ url, name }) => (
  <Link
    to={url}
    style={{ textDecoration: 'none', float: 'right', color: '#0B5FFF' }}
  >
    <h2 style={{ fontWeight: 400 }}>{`${name} ►`}</h2>
  </Link>
);

NextSection.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
};

NextSection.defaultProps = {
  name: 'Next Section',
};

export default NextSection;
