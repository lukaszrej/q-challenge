import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { Home } from '../home';
import { Requests } from '../requests';
import { NoMatch } from '../noMatch';
import { GlobalStyle } from '../../styles/global';

export const Root = () => {
	return (
		<Router>
			<Switch>
				<Redirect exact from='/' to={routes.home} />
				<Redirect exact from='/.' to={routes.home} />
				<Redirect exact from='/q-challenge/' to={routes.home} />
				<Route path={routes.home} component={Home} />
				<Route path={routes.requests} component={Requests} />
				<Route path='*' component={NoMatch} />
			</Switch>
            <GlobalStyle />
		</Router>
	);
};
