import React from 'react';
import fish from '../../../Assets/fish.webp';
import { Link } from 'react-router-dom';
import './FishMonitoring.css';
import fish1 from '../../../Assets/fish-in.png'
const FishMonitoring = () => {
  return (
    <div className='fmont-outer'>
      <div className='container-fixed'>
        <div className='row'>
          <div className='col-lg-6 p-0'>
            <img src={fish} alt="fish monitoring" className='boat-fish' />
          </div>
          <div className='col-lg-6 box1 d-flex align-items-center justify-content-center'>
            <div className='content-center'>
              <h1>What is Fish Satellite Monitoring?</h1>
              <p>
                Precision Grow’s Offshore fishing charts integrate up-to-date high-definition Satellite Sea Surface Temperature (SST) and chlorophyll maps, along with advanced planning features, to simplify the discovery of optimal offshore fishing spots for species like tuna, marlin, mahi, wahoo, and others. Skip the aimless search through barren waters and head directly to where the action is, saving both time and fuel.
              </p>
              <Link to="/" className='btn btn1'>Read More</Link>
              <div className='fish-in'>
                <img src={fish1} alt="fish"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishMonitoring;
