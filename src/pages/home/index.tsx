import { useState } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { ModalContent } from './ModalContent';
import { Home } from '../../styles';
import { START_INQUIRY, DIRECT_REQUEST } from '../../constants/constants';

export const HomePage = () => {
	const [ isModalOpen, setIsModalOpen ] = useState(false);

	const handleStartInquiry = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	return (
		<Home>
			<Button label={START_INQUIRY} onClickHandler={handleStartInquiry} large />

			<Modal open={isModalOpen} title={DIRECT_REQUEST} onClose={handleClose}>
				<ModalContent />
			</Modal>
		</Home>
	);
};
