import { Home } from '../../styles';
import { Button } from '../../components/Button'
import { START_INQUIRY } from '../../constants/constants';

export const HomePage = () => {
    const handleStartInquiry = () => {
        console.log('handle... inquiry');
    };

	return (
		<Home>
            <Button 
                label={START_INQUIRY} 
                onClickHandler={handleStartInquiry}
            />
		</Home>
	);
};
