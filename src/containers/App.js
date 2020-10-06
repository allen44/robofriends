import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
    console.log('app.js mapStateToProps' , 'state ', state);
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('app.js mapDispatchToProps', 'dispatch', dispatch)
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor() {
        console.log('app.js', 'constructor()', ': check');
        super();
        this.state = {
            robots: []
        }

    }

    componentDidMount() {
        console.log('App.js', 'componentDidMount', 'this.state', this.state);
        console.log('App.js', 'componentDidMount', 'this.props', this.props);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }   



    render() {
        // console.log('render()', ': check');
        console.log('app.js render() ', 'this.state', this.state)
        const { robots } = this.state;
        console.log('app.js render() ', 'this.props', this.props)
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
         return !robots.length ? 
         <h1>Loading</h1> :
            (
            <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll> 
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
            </Scroll>
            </div>
            )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App); 