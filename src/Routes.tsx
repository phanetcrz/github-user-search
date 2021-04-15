import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Navbar from './core/components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

const Routes = () =>(
    <BrowserRouter> 
        <Navbar />
        <Switch>
            <Route path="/" exact>  
                <Home />
            </Route>            
            <Route path="/profile">  
                <Profile />
            </Route>            
        </Switch>
    </BrowserRouter>
);

export default Routes;