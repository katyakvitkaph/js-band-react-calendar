import React from 'react';

const BlackButton = ({ name, onClick }) => {
	return (
		<button type='button' className='signout-btn common-btn' data-action='signout' onClick={onClick}>
			{name}
		</button>
	);
};

export default BlackButton;
