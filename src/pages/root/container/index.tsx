import { IProps } from './types';
import { Header } from '../../../styles'
import { APP_HEADER } from '../../../constants/constants';

export const Container = (props: IProps) => {
    const { children } = props;

    return (
		<>
            <Header>
                { APP_HEADER }
            </Header>

            <main>
                { children }
            </main>
		</>
	);
};
