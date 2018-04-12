import React from 'react'
import ProjectAPI from '../data/projects'
import { Link } from 'react-router-dom'

const Portfolio = () => (
  <div className="content">
    <div className="page-header">
      <h1>Portfolio</h1>
      <p>This is a showcase of our most recent work. Enjoy!</p>
    </div>
    <div className="portfolio">
      <ul className="portfolio__items">
        {
          ProjectAPI.all().map(p => (
            <li key={p.slug}>
              <Link to={`/portfolio/${p.slug}`} style={{ backgroundImage: 'url(' + p.thumb + ')' }}>
                <div className="info">
                  <div className="info-container">
                    <h2>{p.name}</h2>
                    <p>{p.description}</p>
                    <ul>
                      <li>{p.tag}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </div>
);

export default Portfolio