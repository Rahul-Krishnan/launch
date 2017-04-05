import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return(
    <div>
      <span>
        When I grow up, I will be a dope header.
      </span>
      <br />
      <Link to='/'> HOME </Link>
      <br />
      <h1 className="page-title"> Restaurant Reviews </h1>
      { props.children }
    </div>
  )
}

export default Layout;
