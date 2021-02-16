import { Button as StyledButton } from '../styles';

interface IProps {
    label: string;
    onClickHandler: () => void;
}

export const Button = (props: IProps) => {
    const { label, onClickHandler } = props;

    const handleButtonClick = () => {    
        onClickHandler && onClickHandler();
    };

	return (
		<StyledButton onClick={handleButtonClick}>
            { label }
		</StyledButton>
	);
};
