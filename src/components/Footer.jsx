import React from 'react';

import TabLink from './TabLink';

const name = 'Aaron MacDonald';
const year = 2026;
const githubIOURL = 'https://aaronwizard.github.io';
const githubURL = 'https://github.com/AaronWizard/webtoys';
const linkedInURL = 'https://www.linkedin.com/in/aaron-j-macdonald/';

const Footer = () => (
	<footer>
		{`${name}, ${year} | `}
		<TabLink url={githubIOURL}>aaronwizard.github.io</TabLink>
		{' | '}
		<TabLink url={githubURL}>Github</TabLink>
		{' | '}
		<TabLink url={linkedInURL}>LinkedIn</TabLink>
	</footer>
);

export default Footer;
