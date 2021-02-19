import { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { ModalContent } from './ModalContent';
import { Category } from '../../types/category';
import { fetchData } from '../../api/fetchData';
import { Home } from '../../styles';
import { START_INQUIRY, DIRECT_REQUEST } from '../../constants/constants';

export const HomePage = () => {
	const [ isModalOpen, setIsModalOpen ] = useState(false);
	const [ categories, setCategories ] = useState<Category[]>([]);

	const handleStartInquiry = () => {
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
        fetchData('data.json', setCategories);
	}, []);

	return (
		<Home>
			<Button label={START_INQUIRY} onClickHandler={handleStartInquiry} large />

			<Modal open={isModalOpen} title={DIRECT_REQUEST} onClose={handleClose}>
				<ModalContent categories={categories} />
			</Modal>
		</Home>
	);
};
