import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkCostum = styled(NavLink)`
   color:white;
   margin-top:15px;
   font-size:13px;
   text-decoration:none;

   &:hover{
      color:red;
   }
`;

const Nav = (props) => {
	return (
		<NavLinkCostum
			exact
			to={`/${props.name}`}
			activeStyle={{
				fontWeight: 'bold',
            color: '#B7B7B7',
            fontSize:'16px'
            
			}}
		>
			{props.name}
		</NavLinkCostum>
	);
};

export default Nav;
