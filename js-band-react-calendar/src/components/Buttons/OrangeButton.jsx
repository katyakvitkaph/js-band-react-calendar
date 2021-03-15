import React from 'react';
import PropTypes from 'prop-types';

const OrangeButton = ({ name, onClick }) => (
	<button type='button' className='create-btn common-btn' data-action='add-note' onClick={onClick}>
		{name}
	</button>
);

OrangeButton.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default OrangeButton;
