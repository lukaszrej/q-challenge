import styled from 'styled-components';

export const StyledButton = styled.button`
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	background: rgb(0, 168, 204);
    border-radius: ${props => props.theme.rounded ? '50%' : '4px'};
    background: ${props => props.theme.rounded ? 'transparent' : ''};
	display: inline-block;
	border: none;
	transition: all 0.4s ease 0s;
    text-transform: none;
    outline: none;
    font-size: ${props => props.theme.large ? '25px' : 'initial'};
    padding: ${props => props.theme.large ? '32px' : 'initial'};
    cursor: pointer;

	&:hover {
		background: ${props => props.theme.rounded ? 'none' : '#115293'};
		-webkit-box-shadow: ${props => props.theme.rounded ? '' : '5px 40px -10px rgba(0, 0, 0, 0.57)'};
		-moz-box-shadow: ${props => props.theme.rounded ? '' : '5px 40px -10px rgba(0, 0, 0, 0.57)'};
		box-shadow: ${props => props.theme.rounded ? '' : '5px 40px -10px rgba(0, 0, 0, 0.57)'};
		transition: all 0.4s ease 0s;
	}
`;
