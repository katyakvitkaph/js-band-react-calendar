import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/global';
import ServiceAPI from '../../services/ServiceAPI';
import users from '../../users.json';
import collectionTypes from '../../constants/collectionTypes';
import login from '../../actions/actions';

const SignInForm = () => {
	const service = new ServiceAPI();
	const [ selectedItem, setSelectedItem ] = useState('');
	const { dispatchGlobal } = useContext(GlobalContext);

	useEffect(
		() => {
			switch (selectedItem) {
				case collectionTypes.ALEX:
					dispatchGlobal(
						login({
							isAdmin: true
						})
					);

					break;
				case collectionTypes.HELGA:
				case collectionTypes.PABLO:
				case collectionTypes.KATE:
					dispatchGlobal(
						login({
							isAdmin: false
						})
					);
					break;
				default:
			}
		},
		[ selectedItem ]
	);
	const initUser = () => {
		service.getAllUsers().then((result) => {
			if (result.data === null) {
				for (let i = 0; i <= users.length; i += 1) {
					service
						.initUsers({
							data: `${users[i].data}`
						})
						.then((res) => res);
				}
			}
		});
	};

	const handleAuth = (e) => {
		e.preventDefault();
		initUser();
	};

	const handleChange = (e) => {
		setSelectedItem(e.target.value);
	};

	return (
		<section>
			<form className='modal-form-auth' onClick={handleAuth}>
				<p className='modal-form__title'>Please authorise:</p>
				<select
					value={selectedItem}
					onChange={handleChange}
					className='modal-form__select modal-form__select-name'
					name='name'
				>
					<option value='helga'>Helga</option>
					<option value='pablo'>Pablo</option>
					<option value='alex'>Alex</option>
					<option value='kate'>Kate</option>
				</select>
				<div className='modal-form-actions'>
					<Link to='/calendar'>
						<button type='submit' className='button' data-action='confirm'>
							Confirm
						</button>
					</Link>
				</div>
			</form>
		</section>
	);
};

export default SignInForm;
