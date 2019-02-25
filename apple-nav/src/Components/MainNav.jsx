import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.nav`
	display: flex;
	justify-content: space-evenly;
	text-decoration: none;
	text-decoration-line: none;
`;

const MainNav = (props) => {
	return (
		<NavDiv>
			{props.data.map((item, i) => (
				<NavLink
					to="/"
					key={i}
					activeStyle={{
						fontWeight: 'bold',
						color: 'blue'
					}}
				>
					{item.name}
				</NavLink>
			))}
		</NavDiv>
	);
};

export default MainNav;
