import React from 'react'
import ProjectAPI from '../data/projects'
import { Link } from 'react-router-dom'

class Project extends React.Component {

  constructor(props) {
    super(props);
    const project = ProjectAPI.get(props.match.params.slug)
    this.slug = project.slug
    this.name = project.name
    this.description = project.description
    this.tag = project.tag
    this.hd = project.images
    this.mobile = project.imagesMobile
    let users = ProjectAPI.all()
    let total = users.length;
    let index = users.findIndex(obj => obj.slug == this.slug);
    this.next = ProjectAPI.projects[index + 1].slug;

    this.state = {
      width: window.innerWidth
    }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillReceiveProps(nextProps) {
    // Aquí he visto que supuestamente puedes hacer algo...
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth })
    this.forceUpdate();
  }
  rerender() {
    alert(hello);
  }

  render() {
    var hd = this.hd
    var mobile = this.mobile
    const { width } = this.state;
    const isMobile = width <= 768;
    if (isMobile) {
      return (
        <div className="content">
          <div className="page-header">
            <h1>{this.name}</h1>
            <p>{this.description}</p>
            <ul>
              <li>{this.tag}</li>
            </ul>
          </div>
          <div className="project">
            <div className="container">
              {
                mobile.map(function (counter, i) {
                  return <div className="project__section" key={i} ><img src={mobile[i]} /></div>
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="content">
          <div className="page-header">
            <h1>{this.name}</h1>
            <p>{this.description}</p>
            <ul>
              <li>{this.tag}</li>
            </ul>
          </div>
          <div className="project">
            <div className="container">
              {
                hd.map(function (counter, i) {
                  return <div className="project__section" key={i} ><img src={hd[i]} /></div>
                })
              }

              <div className="project-nav">
                <span className="next"> 
                  <Link to={`portfolio/${this.next}`}>Next Project</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )
     
    }
  
   
  }
}

export default Project