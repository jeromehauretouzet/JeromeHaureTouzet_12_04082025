import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import lodgingData from '../../data/logement.json';
import homeBannerImage from '../../assets/banner-home.jpg';

// page "Accueil"
function Home() {
  return (
    <>
      <Banner
        imageUrl={homeBannerImage}
        title="Jérôme Haure-Touzet, Développeur Web"
        overlayOpacity={0.6}
      />
    </>
  );
}

export default Home;