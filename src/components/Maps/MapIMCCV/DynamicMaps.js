import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from '../page.module.css';

import MapeoIMCV from '../MapIMCCV/DateoMapaIMCCV'

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
    
    
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
        <MapeoIMCV/>
         {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map;