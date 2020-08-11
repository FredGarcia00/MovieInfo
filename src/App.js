import React from 'react';
import Nav from './components/Nav/Nav';
import TitleList from './components/TitleList';
import Trending from './components/Trending/Trending';
import { Key } from './components/api/Key';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import axios from 'axios';


class App extends React.Component {

    state = {
        movieTitles: []
    }

    onTermSubmit = async term => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${Key}&query=${term}`);
        // console.log(response);
        this.setState({movieTitles: response.data.results});
        // console.log(this.state.movieTitles)
    }
   //response => data.results...
    render() {
        return (
            <Router>
            <div>
              <Nav onFormSubmit={this.onTermSubmit}/>
            </div>
            <Route path="/"/>
            <Trending/>
            <TitleList title={this.state.movieTitles}/>
            </Router>
        )
    }
}

export default App;
