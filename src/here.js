import React, { Component } from 'react';

// This class definition is a React.Component so that we
// can use it in multiple places for the app.

class Location extends Component {

  // The constructor takes properties defined as element attributes
  // defined in JSX along with an initial default value for state.

  constructor(props) {
    super(props);
    this.state = {
      value: '0,0', // Null Island
      error: null,
    }
  }

  // When the component is rendered to the DOM for the first time
  // such as at page load we call the Geolocation API to determine
  // a latitude and longitude for the browser

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            value: position.coords.latitude + ',' + position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }

// Respond to user input with event callback
  
changeLocation(evt) {
    this.setState({
        value: evt.target.value,
      }
    )
  }

  // The JSX definition for how to render this component on the page.  
  // In this case, it's a simple input field for new todo items.

  render() {
    return (
            <input
              className="new-todo"
              value={ this.state.value }
              onChange={ evt => this.changeLocation(evt) }
              />
    );
  }
}
class Map extends Component {

  // For conciseness simply included all parameters in the querystring directly

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://developer.here.com/documentation/maps/dev_guide/topics/get-started.html',
      points: [],
    }
  }

  // Helper function to format list of points

  getPOIList() {
    if (this.state.points.length > 0) {
      let param = '&poi=';
      for (var poi in this.state.points) {
        param += poi.latitude + ',' + poi.longitude;
      }
      return param;
    }

    return '';
  }

  // Render method builds the URL dynamically to fetch the image from the
  // HERE Map Image API

  render() {
    return (
      <img
        src={ this.state.url
          + '&app_id=' + this.props.app_id
          + '&app_code=' + this.props.app_code
          + this.getPOIList()
          }
        alt="Todo Map"/>
    );
  }
}
export default Location;