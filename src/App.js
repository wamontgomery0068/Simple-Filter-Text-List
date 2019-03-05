import React, { Component } from 'react';
import American from './Images/American.png';
import National from './Images/National.png';
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

  handleChange( filter ) {
    this.setState({ filterString: filter})
  };

  render() {
    
    let americanToDisplay = this.state.americanLeague.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <p className = "Team_Name_Text"  key={ index }>{ element }</p>
    })

    let nationalToDisplay = this.state.nationalLeague.filter( (element, index) => {
      return element.includes( this.state.filterString );
    }).map( (element, index) => {
      return <p className = "Team_Name_Text"  key={ index }>{ element }</p>
    })

    return (
      <div className="App_Container">
        <div className = "Title_Container">
          <p className = "Title_Text"> Major League Baseball Teams </p>
        </div>
        <div className = "Content_Container">
          <div className = "American_League_Container">
            <img className = "American_Logo" src = { American } />
            <input 
              className = "American_Input" 
              placeholder = "Enter Team Here" 
              onChange={ (e) => this.handleChange ( e.target.value)} 
              type = "text" />
            <div className = "Team_Name_Container">
              { americanToDisplay }
            </div>
          </div>
          <div className = "National_League_Container">
            <img className = "National_Logo" src = { National } />
            <input className = "National_Input" placeholder = "Enter Team Here" />
            <div className = "Team_Name_Container">
              { nationalToDisplay }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
