import React from 'react';
import PropTypes from 'prop-types';

const DayOfWeekSelect = ({ value, handleChange }) => (
	<select value={value} onChange={handleChange} className=' modal-form__select modal-form__select-day' name='day'>
		<option value='' disabled selected>
			Select your option
		</option>
		<option value='Monday'>Monday</option>
		<option value='Tuesday'>Tuesday</option>
		<option value='Wednesday'>Wednesday</option>
		<option value='Thursday'>Thursday</option>
		<option value='Friday'>Friday</option>
	</select>
);

DayOfWeekSelect.propTypes = {
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default DayOfWeekSelect;
