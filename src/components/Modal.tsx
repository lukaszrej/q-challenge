import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { ModalContent } from '../components/ModalContent';
import { ModalOverlay } from '../components/ModalOverlay';
import { Divider } from '../components/Divider';
import { CloseIcon } from '../components/CloseIcon';
import { ScrollWrapper } from '../components/ScrollWrapper';

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
                    <Button onClick={onClose} rounded>
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
