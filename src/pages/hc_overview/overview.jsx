import React from 'react';
import './overview.css';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import HousechurchCard from '../../shared-components/housechurchCard';
import TestimonyCard from '../../shared-components/testimonyCard';
import Anatolia from './images/Anatolia.jpg';
import CentralJapan from './images/CentralJapan.jpg';
import CMU from './images/CMU1.jpg';
import Laos from './images/Laos1.jpg';
import Manado from './images/MANADO_3.JPG';
import Mongolia from './images/Mongolia7.jpg';
import NA from './images/NA2.JPG';
import SA from './images/SA.JPG';
import Phnom from './images/PhnomPenh7.jpg';
import Siem from './images/SiemReap.JPG';
import Tunisia from './images/Tunisia1.jpg';
import overview from './images/overview.jpg';

export default function Overview() {
  return (
    <>
      <div className="overview-header-container">
        <div className="overview-header-text">
          <div className="overview-header">
            <h1>What is House Church?</h1>
          </div>
          <p>
            We at New Life define a house church as a community <br></br>
            that fulfills all the intrinsic purposes of the church.
          </p>
          <div className="video">
            <iframe
              width="837"
              height="515"
              src="https://www.youtube.com/embed/HhN2yuEVQuA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="dark_green_container">
        <div className="description-grid">
          <div className="description-text">
            <p className="overview-h">
              House churches are shepherded by a leader and are made up of 6-12 people meeting in each other’s homes at least once a
              week. We see the New Testament believers meeting in people’s homes because church was meant to be done in fellowship
              (koinonia) with one another.
            </p>

            <p className="overview-h2">
              Acts 2:46-47 states how the believers in the early church “broke bread in their homes and ate together with glad and
              sincere hearts, praising God.”
            </p>
          </div>
          <LeafImageContainerFaceRight photo={overview} />
        </div>
      </div>
      <div className="housechurch-container">
        <p className="housechurch-h">House Churches</p>
        <div className="housechurch_grid">
          <HousechurchCard photo={Anatolia} HC="Anatolia" description="" />
          <HousechurchCard photo={CentralJapan} HC="Central Japan" description="" />
          <HousechurchCard photo={CMU} HC="CMU" description="" />
          <HousechurchCard photo={Laos} HC="Laos" description="" />
          <HousechurchCard photo={Manado} HC="Manado" description="" />
          <HousechurchCard photo={Mongolia} HC="Mongolia" description="" />
          <HousechurchCard photo={SA} HC="U of H" description="" />
          <HousechurchCard photo={NA} HC="North Africa" description="" />
          <HousechurchCard photo={Phnom} HC="Phnom Penh" description="" />
          <HousechurchCard photo={Siem} HC="Siem Reap" description="" />
          <HousechurchCard photo={Tunisia} HC="Tunisia" description="" />
        </div>
      </div>
      <div className="beige_container">
        <h4>Testimonies</h4>
        <div className="testimony_grid">
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
          <TestimonyCard text="Lorem ipsum" name="-Lorem ipsum" />
        </div>
      </div>
    </>
  );
}