import React from 'react';
import TableCell from './TableCell';

const TBody = () => {
	const hours = [ '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00' ];
	const cell = [ ...Array(5) ];
	return (
		<tbody className='table__body'>
			{hours.map((hour, index) => (
				<tr key={index} className='table__row' data-cells='body'>
					<th key={index} className='table__cell' scope='row'>
						{hour}
					</th>
					{cell.map((index) => <TableCell key={index} />)}
				</tr>
			))}
		</tbody>
	);
};

export default TBody;
