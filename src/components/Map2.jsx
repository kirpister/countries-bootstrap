import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      capital: props.country.capital,
    };
  }

  componentDidMount() {
    const google = window.google;
    const { capital } = this.state;

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: 0, lng: 0 },
    });

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: capital }, (results, status) => {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        new google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    this.setState({ map });
  }

  render() {
    return <div id="map" style={{ height: '400px', width: '100%' }} />;
  }
}

export default Map;

