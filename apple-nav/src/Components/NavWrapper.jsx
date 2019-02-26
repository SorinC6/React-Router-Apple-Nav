import React from 'react';
import styled from 'styled-components';
import { Link, Route } from 'react-router-dom';
import Nav from './Nav';
import SubNav from './SubNav';

const NavDiv = styled.nav`
	display: flex;
	flex-direction: column;
`;

const NavItems = styled.nav`
	display: flex;
   justify-content: space-evenly;
   background-color:#333333;
   padding-bottom:10px;
`;

const NavWrapper = (props) => {
	//console.log(props.data);

	return (
		<NavDiv>
			<NavItems>
				{props.data.map((item, i) => <Nav key={i} name={item.name} />)}
			</NavItems>

			<div>
				{props.data.map((item, i) => (
					<Route
						key={i}
						exact
						path={`/${item.name}`}
						render={(props) => <SubNav {...props} subLinks={item.subLinks} />}
					/>
				))}
			</div>
		</NavDiv>
	);
};

export default NavWrapper;
