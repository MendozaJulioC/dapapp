'use client'
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMaps'), { ssr: true });

import Map from './Map';
//import DondeMap from '../DateoMap/DondeMap';
import styles from '../page.module.css';
const position = [6.2668,-75.5698];
// 6.2458/-75.5562
//6.2474/-75.6021
//6.2668/-75.5698

export default function Home() {
return (

    <Map className={styles.map} scrollWheelZoom={false}  center={position} zoom={8}  >
        {({ TileLayer }) => (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {/* <DondeMap/> */}
        </>
        )}
    </Map>

)}