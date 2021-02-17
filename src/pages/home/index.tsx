import { useState } from 'react';
import { Home } from '../../styles';
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { START_INQUIRY } from '../../constants/constants';

export const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStartInquiry = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

	return (
		<Home>
            <Button 
                label={START_INQUIRY} 
                onClickHandler={handleStartInquiry}
                large
            />

            <Modal 
                open={isModalOpen}
                title={START_INQUIRY}
                onClose={handleClose}
            >
                <div>some content...</div>
            </Modal>
		</Home>
	);
};
