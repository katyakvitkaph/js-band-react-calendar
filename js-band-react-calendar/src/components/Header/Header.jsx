import React from 'react';
import { Link } from 'react-router-dom';
import { OrangeButton, BlackButton } from '../Buttons/index';
import { ReactComponent as CalendarLogo } from '../../assets/icons/calendar.svg';

const Header = () => (
  <header className="header">
    <div className="header-container">
      <a href="/" className="logo">
        <CalendarLogo />
      </a>
      <form className="form">
        <select className="form__select select--name" name="name">
          <option value="">All members</option>
          <option value="Helga">Helga</option>
          <option value="Pablo">Pablo</option>
          <option value="Alex">Alex</option>
          <option value="Kate">Kate</option>
        </select>
        <div className="buttons-section">
          <OrangeButton name="New event" />
          <Link to="/signin">
            <BlackButton name="Sign out" />
          </Link>
        </div>
      </form>
    </div>
  </header>
);

export default Header;
