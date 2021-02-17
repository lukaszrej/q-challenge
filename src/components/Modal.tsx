import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { ModalContent, ModalOverlay, Divider, CloseIcon } from '../styles';

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

                <main>
                    {children}
                </main>
            </ModalContent>
        </>,
        document.getElementById('portal') as HTMLElement
	);
};
