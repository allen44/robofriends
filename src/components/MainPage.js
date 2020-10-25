import React, { Component } from 'react';
// import robots from './robots'
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';
import CounterButton from './CounterButton';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = () => {
    return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }
  render() {
    const { robots, onSearchChange, isPending } = this.props;
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <CounterButton />
        <SearchBox searchChange={onSearchChange}/> 
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)} />
            </ErrorBoundary>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
