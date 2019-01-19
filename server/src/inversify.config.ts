import { Container } from 'inversify';
import { App } from './app';
import { RoutesForm } from './RoutesForm';
import Types from './Types';

const container: Container = new Container();

container.bind('App').to(App);
container.bind(Types.RoutesForm).to(RoutesForm);

export { container };
