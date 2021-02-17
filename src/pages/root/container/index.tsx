import { useHistory } from "react-router-dom";
import { routes } from '../../../constants/routes';
import { IProps } from './types';
import { Header } from '../../../styles'
import { APP_HEADER } from '../../../constants/constants';

export const Container = (props: IProps) => {
    const { children } = props;
    let history = useHistory();

    const onLogoClick = () => {
        history.push(routes.home)
    };

    return (
		<>
            <Header onClick={onLogoClick}>
                <h1>
                    { APP_HEADER }
                </h1>
            </Header>

            <main>
                { children }
            </main>
		</>
	);
};
