import React from 'react';

const OrangeButton = ({ name, onClick }) => {
	return (
		<button type='button' className='create-btn common-btn' data-action='add-note' onClick={onClick}>
			{name}
		</button>
	);
};

export default OrangeButton;
