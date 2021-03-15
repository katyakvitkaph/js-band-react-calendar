import React from 'react';
import Thead from './Thead';
import Tbody from './TBody';

const Table = () => (
	<table className='table-calendar'>
		<caption className='table__title'>Calendar</caption>
		<Thead />
		<Tbody />
	</table>
);

export default Table;
