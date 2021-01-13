import React from "react";
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/nature">nature</Link></li>
      <li><Link to="/portrait">portrait</Link></li>
      <li><Link to="/documentary">documentary</Link></li>
      <li><Link to="/architecture">architecture</Link></li>
    </ul>
  );
};

export default Navigation;
