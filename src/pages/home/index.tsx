import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { Categories } from './Categories';
import { Home } from '../../styles';
import { Category } from '../../types/category';
import { categories as fetchedCategories } from '../../data/data';
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
		setCategories(fetchedCategories);
	}, []);

	return (
		<Home>
			<Button label={START_INQUIRY} onClickHandler={handleStartInquiry} large />

			<Modal open={isModalOpen} title={DIRECT_REQUEST} onClose={handleClose}>
				<Categories categories={categories} />
			</Modal>
		</Home>
	);
};
