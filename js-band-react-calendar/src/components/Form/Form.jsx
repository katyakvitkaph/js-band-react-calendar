import React, { useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DayOfWeekSelect from './DayOfWeekSelect';
import TimeSelect from './TimeSelect';

const options = [
	{ value: 'alex', label: 'Alex' },
	{ value: 'pablo', label: 'Pablo' },
	{ value: 'kate', label: 'Kate' },
	{ value: 'helga', label: 'Helga' }
];

const Form = () => {
	const [ error, setError ] = useState('');
	const [ formData, setFormData ] = useState({
		title: '',
		time: '',
		day: '',
		nameOfMember: []
	});

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setError('');
		setFormData({
			...formData,
			[name]: value
		});
	};

	const onChange = (selectedOptions) => setFormData({ ...formData, nameOfMember: selectedOptions });

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.title && formData.day && formData.time && formData.nameOfMember.length > 0) {
			setError('');
		} else {
			setError('Please fill in all fields.');
		}
	};

	return (
		<div className='modal-window'>
			<form className='modal-form' onSubmit={handleSubmit} handleChange={handleChange}>
				<p className='modal-form__title'>Name of the event:</p>
				<input
					id='title'
					value={formData.title}
					onChange={handleChange}
					type='text'
					className='modal-form__input'
					placeholder='Title'
					name='title'
				/>
				{error && <div className='error-message'>{error}</div>}
				<p className='modal-form__title'>Day:</p>
				<DayOfWeekSelect value={formData.day} handleChange={handleChange} />
				{error && <div className='error-message'>{error}</div>}
				<p className='modal-form__title'>Time:</p>
				<TimeSelect value={formData.time} handleChange={handleChange} />
				{error && <div className='error-message'>{error}</div>}
				<p className='modal-form__title'>Participant:</p>

				<Select
					styles={{
						control: (base) => ({
							...base,
							border: 'none',
							backgroundColor: '#f5f7fa'
						})
					}}
					closeMenuOnSelect
					isMulti
					value={formData.nameOfMember}
					options={options}
					name='nameOfMember'
					onChange={onChange}
				/>
				{error && <div className='error-message'>{error}</div>}
				<div className='modal-form-actions'>
					<button type='submit' className='button' data-action='create-success'>
						Save
					</button>
					<Link to='/calendar'>
						<button type='button' className='button' data-action='create-cancel'>
							Cancel
						</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Form;
