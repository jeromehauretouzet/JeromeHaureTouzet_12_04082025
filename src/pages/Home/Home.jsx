import React from 'react';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import projectsData from '../../data/projects.json';
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

      <section className="home-gallery-section">
        {projectsData.map(project => (
          <Card
            key={project.id}
            id={project.id}
            title={project.title}
            imageUrl={project.cover}
          />
        ))}  
      </section>
    </>
  );
}

export default Home;