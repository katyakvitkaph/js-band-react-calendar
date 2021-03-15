import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/global';
import { OrangeButton, BlackButton } from '../Buttons/index';
import { ReactComponent as CalendarLogo } from '../../assets/icons/calendar.svg';

const Header = () => {
	const { stateGlobal } = useContext(GlobalContext);

	return (
		<header className='header'>
			<div className='header-container'>
				<a href='/' className='logo'>
					<CalendarLogo />
				</a>
				<form className='form'>
					<select className='form__select select--name' name='name'>
						<option value=''>All members</option>
						<option value='Helga'>Helga</option>
						<option value='Pablo'>Pablo</option>
						<option value='Alex'>Alex</option>
						<option value='Kate'>Kate</option>
					</select>
					<div className='buttons-section'>
						{stateGlobal.isAdmin && (
							<Link to='/create-event'>
								<OrangeButton name='New event' />
							</Link>
						)}
						<Link to='/signin'>
							<BlackButton name='Sign out' />
						</Link>
					</div>
				</form>
			</div>
		</header>
	);
};

export default Header;
