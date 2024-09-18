import React from 'react'
import './Weoffer.css'
import Titletag from '../../Titletag/Titletag'
import img1 from '../../../Assets/28.webp'
import WeofferCard from './WeofferCard'
import offer1 from '../../../Assets/offer-1.webp'
import offer2 from '../../../Assets/offer-2.webp'
import offer3 from '../../../Assets/offer-3.webp'
import offer4 from '../../../Assets/offer-4.webp'
import offer5 from '../../../Assets/offer-5.webp'
import offer6 from '../../../Assets/offer-6.webp'
import offer7 from '../../../Assets/offer-7.webp'
import offer8 from '../../../Assets/offer-8.webp'
import offer9 from '../../../Assets/offer-9.webp'
const Weoffer = () => {
  return (
    <div>
      <div className='Weoff-outer'>
        <section>
            <div className='container'>
            <Titletag
      title="What We Offer"
      bgImage={img1} // Path to your image
    />
     <div className='row'>
     <WeofferCard
        image={offer1}
        title="Crop Health Monitoring"
        description="Smart Insights for Healthy Crops and Informed Farming Decisions."
        number="01"
      />
       <WeofferCard
        image={offer2}
        title="Crop Irrigation Monitoring"
        description="Precision crop irrigation monitoring enhances water efficiency."
        number="02"
      />
         <WeofferCard
        image={offer3}
        title="Radar Data"
        description="Radar data ensures continuous monitoring during adverse weather"
        number="03"
      />
       <WeofferCard
        image={offer4}
        title="Soil Organic Carbon"
        description="Soil organic carbon tracking for sustainable and fertile agriculture"
        number="04"
      />
       <WeofferCard
        image={offer5}
        title="Digital Elevation Model"
        description="Digital elevation models optimize land use and drainage planning"
        number="05"
      />
       <WeofferCard
        image={offer6}
        title="Crop Area & Yield Estimation"
        description="Accurate crop area and yield estimation for informed decisions"
        number="06"
      />
       <WeofferCard
        image={offer7}
        title="Current & Forecast Weather"
        description="Real-time and forecast weather updates guide agricultural planning"
        number="07"
      />
       <WeofferCard
        image={offer8}
        title="Plantation Management"
        description="Tree Age, Tree Count, Tree Uprooting Analysis with high accuracy"
        number="08"
      />
       <WeofferCard
        image={offer9}
        title="Product Traceability"
        description="Seamless product traceability, unveiling the journey from farm to table"
        number="09"
      />




     </div>
            </div>
        </section>
      </div>
      
    </div>
  )
}

export default Weoffer
