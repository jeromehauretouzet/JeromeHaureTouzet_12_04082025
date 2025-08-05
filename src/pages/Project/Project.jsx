import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery';
import Collapse from '../../components/Collapse/Collapse';
import projectsData from '../../data/projects.json';
import './Project.scss';

function Project() {

  const { id } = useParams();                                                           // --- Récupère l'ID du projet depuis l'URL ---
  const project = projectsData.find(item => item.id === id);                            // --- Trouve le projet correspondant à l'ID ---

  if (!project) {                                                                       // --- Redirection si projet inexistant ---
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="project-page">
      <Gallery pictures={project.pictures} />                                           {/* --- Galerie d'images --- */}

      <section className="project-main-info">                                           {/* --- Info principale --- */}

        <div className="project-info">                                                  {/* --- Informations --- */}
          <h1 className="project-info__title">{project.title}</h1>                      {/* --- Titre du projet--- */}

          <div className="project-info__skills">                                        {/* --- Compétences --- */}
            {project.skills.map((skill, index) => (
              <span key={`${skill}-${index}`} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {project.link && (                                                               /* --- Lien vers GitHub --- */
          <div className="project-link-container">
            <a href={project.link} target="_blank" className="project-link-button">
              Voir le code sur GitHub
            </a>
          </div>
        )}
      </section>

      <section className="project-collapses-container">                                 {/* --- Conteneur du menu déroulant --- */}
        <Collapse
          title="Description du projet"
          content={project.description}
        />
      </section>
    </div>
  );
}

export default Project;