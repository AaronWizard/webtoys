import React from 'react';

import TabLink from './TabLink';

const name = 'Aaron MacDonald';
const year = 2020;
const linkedInURL = 'https://www.linkedin.com/in/aaron-macdonald-56585916';
const githubURL = 'https://github.com/AaronWizard/webtoys';

const Footer = () => (
	<footer>
		{`${name}, ${year} | `}
		<TabLink url={linkedInURL}>LinkedIn</TabLink>
		{' | '}
		<TabLink url={githubURL}>Github</TabLink>
	</footer>
);

export default Footer;
