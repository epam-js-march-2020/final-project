import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class LocationMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 59.985352,
      lng: 30.307448,
      zoom: 16 
    }
  }

  render() {
    const { t } = this.props;
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            {t('contacts.address')}<br/>{t('contacts.entrance')}
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default LocationMap;
