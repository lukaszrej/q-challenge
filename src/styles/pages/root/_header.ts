import styled from 'styled-components';

export const Header = styled.header`
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    background: linear-gradient(270deg, #115293 0%, rgb(0, 168, 204) 55%);
	color: white;
	min-height: 64px;

	h1 {
		font-size: calc(10px + 2vmin);
		cursor: pointer;
	}
`;
