import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { ModalContent, ModalOverlay, Divider, CloseIcon, ScrollWrapper } from '../styles';

interface IProps {
	open: boolean;
    title: string;
	children: ReactNode;
	onClose: () => void;
}

export const Modal = (props: IProps) => {
	const { open, title, children, onClose } = props;

	if (!open) return null;

	return createPortal(
        <>
            <ModalOverlay />

            <ModalContent>
                <header>
                    <h2>{ title }</h2>
                    <Button onClickHandler={onClose} rounded>
                        <CloseIcon />
                    </Button>
                </header>

                <Divider />

                <ScrollWrapper>
                    {children}
                </ScrollWrapper>
            </ModalContent>
        </>,
        document.getElementById('portal') as HTMLElement
	);
};
