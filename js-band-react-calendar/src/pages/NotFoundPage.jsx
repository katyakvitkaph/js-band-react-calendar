import React from 'react';
import { Link } from 'react-router-dom';
import { OrangeButton } from '../components/Buttons/index';

const NotFoundPage = () => (
  <section className="page-not-found">
    <div className="content-block">
      <h1 className="page-not-found__title">Page not found</h1>
      <nav className="page-not-found__nav">
        <Link to="/calendar">
          <OrangeButton name="Back to Calendar">Back to Calendar</OrangeButton>
        </Link>
      </nav>
    </div>
    <h4 className="textError">404</h4>
  </section>
);

export default NotFoundPage;
