import { ReactNode } from "react";
import { useHistory } from "react-router-dom";
import { Header } from '../../components/Header'
import { APP_HEADER } from '../../constants/constants';

export interface IProps {
    children: ReactNode;
}

export const Container = (props: IProps) => {
    const { children } = props;
    let history = useHistory();

    const onLogoClick = () => {
        history.push('/home')
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
