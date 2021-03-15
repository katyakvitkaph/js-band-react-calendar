import React, { useReducer } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import reducer, { initialState } from '../../reducers/global';
import GlobalContext from '../../context/global';
import NotFoundPage from '../../pages/NotFoundPage';
import CalendarPage from '../../pages/CalendarPage';
import SignInPage from '../../pages/SingInPage';
import CreateNewEvent from '../../pages/CreateNewEvent';

const App = () => {
	const [ state, dispatch ] = useReducer(reducer, initialState);

	return (
		<GlobalContext.Provider value={{ dispatchGlobal: dispatch, stateGlobal: state }}>
			<Switch>
				<Redirect exact from='/' to='/signin' />
				<Route exact path='/signin' component={SignInPage} />
				<Route exact path='/calendar' component={CalendarPage} />
				<Route exact path='/create-event' component={CreateNewEvent} />
				<Route path='*' component={NotFoundPage} />
			</Switch>
		</GlobalContext.Provider>
	);
};

export default App;
