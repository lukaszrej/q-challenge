import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent, ModalOverlay } from '../styles';

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
                    <button onClick={onClose}>Close</button>
                </header>

                <main>
                    {children}
                </main>
            </ModalContent>
        </>,
        document.getElementById('portal') as HTMLElement
	);
};
