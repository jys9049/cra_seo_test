import React from 'react';
import { Link } from 'react-router-dom';
import styled from './Header.module.css'

const Header = () => {
  return (
    <div className={styled.HeaderContainer}>
      <Link to="/">메인페이지</Link>
      <Link to="/sub">서브페이지</Link>
      <Link to="/sub2">서브2페이지</Link>
    </div>
  );
};

export default Header;