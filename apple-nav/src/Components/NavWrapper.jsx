import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const NavDiv = styled.nav`
	display: flex;
   justify-content: space-evenly;
   background-color:#323232;
   color:white;
   height: 50px;
`;

const SubNav = (props) => {
	console.log(props.data);
  
	return (
		<NavDiv>
         <Nav name='First'/>
         <Nav name='Secont'/>
         <Nav name='Third'/>
		</NavDiv>
	);
};

export default SubNav;
