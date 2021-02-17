import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button as StyledButton } from '../styles';

interface IProps {
	onClickHandler: () => void;
	label?: string;
	children?: ReactNode;
    rounded?: boolean;
    large?: boolean;
}

export const Button = (props: IProps) => {
	const { onClickHandler, label, children, rounded, large } = props;

	const handleButtonClick = () => {
		onClickHandler && onClickHandler();
	};

	return (
        <ThemeProvider theme={{rounded, large}}>
            <StyledButton onClick={handleButtonClick}>
                {label}
                {children}
            </StyledButton>
        </ThemeProvider>
	);
};
