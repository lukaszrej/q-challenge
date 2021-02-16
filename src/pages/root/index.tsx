import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Container } from './container';
import { HomePage } from '../home';
import { RequestsPage } from '../requests';
import { NoMatchPage } from '../noMatch';
import { GlobalStyle } from '../../styles/global';

export const Root = () => {
	return (
		<Router>
			<GlobalStyle />
			<Container>
				<Switch>
					<Redirect exact from='/' to={routes.home} />
					<Redirect exact from='/.' to={routes.home} />
					<Redirect exact from='/q-challenge/' to={routes.home} />
					<Route path={routes.home} component={HomePage} />
					<Route path={routes.requests} component={RequestsPage} />
					<Route path='*' component={NoMatchPage} />
				</Switch>
			</Container>
		</Router>
	);
};
