import React from 'react';
import PropTypes from 'prop-types';

const BlackButton = ({ name, onClick }) => (
	<button type='button' className='signout-btn common-btn' data-action='signout' onClick={onClick}>
		{name}
	</button>
);

BlackButton.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
export default BlackButton;
