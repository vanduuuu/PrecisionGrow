import React from 'react'
import VideoSlider from '../VideoSlider/VideoSlider'
import MissionPg from './MissionPg/MissionPg'
import Chooseus from './Chooseus/Chooseus'
import VdoText from './VdoText/VdoText'
import Weoffer from './Weoffer/Weoffer'
import FishMonitoring from './FishMonitoring/FishMonitoring'
import Faq from '../FAQ/Faq'
import Addecrop from './Addecrop/Addecrop'
import vdo3 from '../../Assets/Vdotxt.mp4'

const Home = () => {
  return (
    <div>
      <VideoSlider/>
      <MissionPg/>
      <Chooseus/>
      <VdoText 
        mediaSrc={vdo3} 
        isVideo={true} 
        title="State Of The Art Technology" 
        Desc="Unleashing the Power of Satellite Analytics Unlock the full potential of your farm with Precision Grow's state-of-the-art satellite analytics platform. Our technology provides real-time, high-resolution data, going beyond conventional precision farming to deliver actionable insights into crop health, moisture levels, pest infestations and more. Elevate your farming practices with Precision Grow!"
      />
      <Addecrop/>
      <Weoffer/>
      <FishMonitoring/>
      <Faq/>
    </div>
  )
}

export default Home
