import React from 'react';
import PropTypes from 'prop-types';

const NewTabLink = ({ url, children }) => (
	<a
		href={url}
		target="_blank"
		rel="noopener noreferrer"
	>
		{children || url}
	</a>
);

NewTabLink.propTypes = {
	url: PropTypes.string.isRequired,
	children: PropTypes.node,
};

NewTabLink.defaultProps = {
	children: null,
};

export default NewTabLink;
