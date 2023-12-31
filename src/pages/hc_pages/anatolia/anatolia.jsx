import React from 'react';

import Header from '../shared/header';
import PhotoGallery from '../shared/photo_gallery';
import shep from './photos/shep1.jpeg';
import photo1 from './photos/anatolia1.JPG';
import photo2 from './photos/anatolia2.JPG';
import photo3 from './photos/anatolia3.JPG';
import photo4 from './photos/anatolia4.jpg';
import photo5 from './photos/anatolia5.jpg';
import photo6 from './photos/anatolia6.JPG';
import photo7 from './photos/anatolia7.JPG';
import photo8 from './photos/anatolia8.JPG';
import photo9 from './photos/anatolia9.JPG';
import photo10 from './photos/anatolia10.JPEG';
import photo11 from './photos/anatolia11.jpg';
import photo12 from './photos/anatolia12.jpg';


export default function Anatolia() {
  return (
    <>
      <Header
        photo={photo1}
        HCname="Anatolia House Church"
        description="Welcome to Anatolia, the most introverted HC!
             (jkjk.. not) Filled with the most iconic personalities across Rice majors, Anatolia has 7 girls and 6 guys. 
             Come visit and stay for nights filled with boba runs, great off topic convos, attempts at learning K-pop dances, ~chill vibes~, 
            and most of all learning about who Jesus is together!"
        shepPhoto1={shep}
        shepName1="Teresa Chin"
        shepSchool1="Rice 2025"
        shepMajor1="Neuroscience"
        shepMessenger1="https://www.facebook.com/teresa.chin.35977"
        shepEmail1="mailto:tvc1@rice.edu"
      />
      <PhotoGallery
        photo1={photo1}
        photo2={photo2}
        photo3={photo3}
        photo4={photo4}
        photo5={photo5}
        photo6={photo6}
        photo7={photo7}
        photo8={photo8}
        photo9={photo9}
        photo10={photo10}
        photo11={photo11}
        photo12={photo12}
      />
    </>
  );
}
