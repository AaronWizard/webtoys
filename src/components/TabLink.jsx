import React from 'react';
import PropTypes from 'prop-types';

const TabLink = ({ url, children }) => (
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
	>
		{children || url}
	</a>
);

TabLink.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node,
};

TabLink.defaultProps = {
	children: null,
};

export default TabLink;
