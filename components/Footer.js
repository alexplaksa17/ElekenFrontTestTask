
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
require('../styles/footer.scss');
export default class Header extends Component {
    render () {
        return (
          <footer>
            <div className="copyright">
              <span className="copyright__text">© 2017 Something.</span>
            </div>
            <div className="navigation">
              <ul className="navigation__list">
                <li className="navigation__list__item"><Link to='/'>Terms</Link></li>

                <li className="navigation__list__item"><Link to='/calendar'>Privacy</Link></li>

                <li className="navigation__list__item"><Link to='/contacts'>Security</Link></li>

                <li className="navigation__list__item"><Link to='/portfolio'>Status</Link></li>

                <li className="navigation__list__item"><Link to='/contacts'>Help</Link></li>

                <li className="navigation__list__item"><Link to='/portfolio'>Contact</Link></li>
              </ul>
            </div>

          </footer>
        )
    }
}
