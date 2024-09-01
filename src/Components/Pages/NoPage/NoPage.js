import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NoPage.module.css';

const NoPage = () => {
  return (
    <div className={classes.notFoundContainer}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NoPage;
