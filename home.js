import React, {Component} from 'react';
import meCover from '../images/mecover.jpg';
import MenuItem from '../components/menuItem';
import '../styles/main.css';

class Home extends Component {
  render() {
    return (
      <div className='container'>

        <header>
          <div className='logo'> dash </div>
          <div className='profile'>
          FULL STACK WEB DEVELOPER AND VISUAL DESIGNER THAT THRIVES AT THE INTERSECTION OF CODING AND CREATIVITY.
          </div>
        </header>

        <main>

          <img src={meCover} className='meCover'/>
          <div className='coverBlurb'>
            <span className='title'>web developer</span>
            <span className='desc'>Visual Designer | Photographer | Beyonce Evangelist </span>
            <span className='coverIssue'>Issue 01</span>

          </div>


          <nav>
            <div>
              <MenuItem name='projects'/>
            </div>
            <div>
              <MenuItem name='about'/>
            </div>
            <div className='sideLogo'>
              dash walton
            </div>
          </nav>



        </main>

      </div>
    );
  }
}

export default Home;
