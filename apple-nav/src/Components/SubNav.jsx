import React from 'react';
import styled from 'styled-components';

const CostumDiv = styled.div`
	display: flex;
   flex-direction: column;
   /* align-items:baseline; */


	p {
      color: black;
      /* font-size:16px; */
	}
	img {
		max-width: 90%;
		height: auto;
	}
`;

const CostumNav = styled.div`
	max-width: 100%;
	color: #fafafa;
	display: flex;
	padding-left: 200px;
	padding-right: 200px;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 30px;
	background-color: #F5F5F5;
`;
const SubNav = (props) => {
	console.log(props);
	return (
		<CostumNav>
			{props.subLinks.map((link, i) => (
				<CostumDiv key={i}>
					<img src={link.img} />
					<p>{link.name}</p>
				</CostumDiv>
			))}
		</CostumNav>
	);
};

export default SubNav;
