import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ title }) => (
	<section className='event-list__section'>
		<h2 className='item__title'>{title}</h2>
		<div className='buttons-container'>
			<button type='button' className='button-delete' data-action='delete'>
				X
			</button>
		</div>
	</section>
);

Event.propTypes = {
	title: PropTypes.string.isRequired
};

export default Event;
