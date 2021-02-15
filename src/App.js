import {Home} from './pages/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import React from 'react';

function App() {
  return (
    <GithubState>
    <AlertState>
    <BrowserRouter>
        <Navbar/>
        <div className='container' pt-4>
          {/* <h1>hello world</h1> */}
          <Alert alert={{text:'Test alert'}}/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/profile/:name" component={Profile}/>
          </Switch>
            
          <Home/>
        </div>
      </BrowserRouter>
      </AlertState>
      </GithubState>
  );
}

export default App;
