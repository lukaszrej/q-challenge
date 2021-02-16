import styled from 'styled-components';

export const Button = styled.button`
	color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #2196f3;
	padding: 20px;
	border-radius: 5px;
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
    text-transform: none;
    font-size: 20px;

	&:hover {
		background: #1976d2;
		-webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		-moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
		box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
		transition: all 0.4s ease 0s;
	}
`;
