import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from './container';
import { HomePage } from '../home';
import { NoMatchPage } from '../noMatch';
import { GlobalStyle } from '../../styles/globalStyle';

export const Root = () => {
	return (
		<Router>
			<GlobalStyle />
			<Container>
				<Switch>
					<Redirect exact from='/' to='/home' />
					<Redirect exact from='/.' to='/home' />
					<Redirect exact from='/q-challenge/' to='/home' />
					<Route path='/home' component={HomePage} />
					<Route path='*' component={NoMatchPage} />
				</Switch>
			</Container>
		</Router>
	);
};
