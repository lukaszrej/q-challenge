import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledButton } from './StyledButton';

interface IProps {
	onClick: () => void;
	label?: string;
	children?: ReactNode;
    rounded?: boolean;
    large?: boolean;
}

export const Button = (props: IProps) => {
	const { onClick, label, children, rounded, large } = props;

	const handleButtonClick = () => {
		onClick && onClick();
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
