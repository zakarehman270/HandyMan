import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render () {
    return (
      <Map google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyDZijmBTORcnMHq7IcdsU9ey_rG6EIRuws',
}) (MapContainer);
