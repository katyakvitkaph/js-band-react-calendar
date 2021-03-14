import React from 'react';

const Thead = () => {
	const daysOfWeek = [ '', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ];
	return (
		<thead className='table__header'>
			<tr className='table__row' data-cells='header'>
				{daysOfWeek.map((dayOfWeek, index) => (
					<th key={index} className='table__cell table__cell-header' scope='col'>
						{dayOfWeek}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default Thead;
