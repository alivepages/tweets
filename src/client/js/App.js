import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import Visits from './containers/Visits';
import Visit from './containers/Visit';
import Users from './containers/Users';
import User from './containers/User';
import Stats from './containers/Stats';

const DynamicRoute = (props) => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: '#0E6655'}
  return <h2 style={styleObj}>Dynamic Route: <u>{props.match.params.routeVal}</u></h2>
}

const DemoComponent = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'slateblue'}
  return <h2 style={styleObj}>Demo Route U</h2>
}

const NoMatch404 = () => {
  const styleObj = {padding: '3rem', fontSize: '6vw', color: 'indianred'}
  return <h2 style={styleObj}>No Match - 404</h2>
}

class App extends React.Component {
  render (){
    return <div>
      <Switch>
        <Route path='/visits' component={Visits}/>
        <Route path='/visit/:id' component={Visit}/>
        <Route path='/users' component={Users}/>
        <Route path='/user/:id' component={User}/>
        <Route path='/stats' component={Stats}/>
        <Route path='/' component={Stats}/>
        <Route component={NoMatch404}/>
      </Switch>
    </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
