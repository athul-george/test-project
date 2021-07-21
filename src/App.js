import './App.css';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from './components/home'
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}