import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
      americanLeague: [
        "Baltimore Orioles",
        "Boston Red Sox",
        "Chicago White Sox",
        "Cleveland Indians",
        "Detroit Tigers",
        "Houston Astros",
        "Kansas City Royals",
        "Los Angeles Angels",
        "Minnesota Twins",
        "New York Yankees",
        "Oakland Athletics",
        "Seattle Mariners",
        "Tampa Bay Rays",
        "Texas Rangers",
        "Toronto Blue Jays",
      ],
      nationalLeague: [
        "Arizona Diamondbacks",
        "Atlanta Braves",
        "Chicago Cubs",
        "Cincinnati Reds",
        "Colorado Rockies",
        "Miami Marlins",
        "Milwaukee Brewers",
        "New York Mets",
        "Philadelphia Phillies",
        "Pittsburgh Pirates",
        "San Diego Padres",
        "San Francisco Giants",
        "St. Louis Cardinals",
        "Washington Nationals",
      ]
    }
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
