import React from 'react';
import PropTypes from 'prop-types';

const TimeSelect = ({ value, handleChange }) => (
	<select value={value} onChange={handleChange} className=' modal-form__select modal-form__select-time' name='time'>
		<option value='' disabled selected>
			Select your option
		</option>
		<option value='10:00'>10:00</option>
		<option value='11:00'>11:00</option>
		<option value='12:00'>12:00</option>
		<option value='13:00'>13:00</option>
		<option value='14:00'>14:00</option>
		<option value='15:00'>15:00</option>
		<option value='16:00'>16:00</option>
		<option value='17:00'>17:00</option>
		<option value='18:00'>18:00</option>
	</select>
);

TimeSelect.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default TimeSelect;
