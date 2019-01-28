import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import NavbarTop from './components/navbar';
import MainLayoutPage from './components/mainLayoutPage';
import SingleUserPage from './components/singleUserPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <NavbarTop />
          <BrowserRouter>
          <div>
            <Route path="/" exact component={MainLayoutPage}/>
            <Route path="/user/:id" component={SingleUserPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
