import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkCostum = styled(NavLink)`
   color:white;
   margin-top:15px;
`

const Nav = (props) => {
	return <NavLinkCostum to="/">{props.name}</NavLinkCostum>;
};

export default Nav;
